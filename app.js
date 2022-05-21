require('dotenv').config()
const admin = require("firebase-admin");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');
const dateTime = require('node-datetime');
app.use(express.json());


// sign up user with firebase and then send the data into mysql
  //daftarin user baru
  app.post("/signup", async (req, res) => {
    const user = {
      displayName: req.body.displayName,
      email : req.body.email,
      password: req.body.password,
      dob: req.body.dob,
      gender: req.body.gender,
      status: req.body.status
    }

  try{
    //create new user into firebase auth
      const userResponse = await admin.auth().createUser({
        displayName: user.displayName,
        email: user.email,
        password: user.password,
        emailVerified: true,
        emailDisabled: false
      });

      const data = {
        id: userResponse.uid,
        username: userResponse.displayName,
        email: userResponse.email,
        dob:user.dob,
        gender:user.gender,
        status: user.status
      }

      //insert the data into mysql
      const query = "INSERT INTO user VALUES (?, ?, ?, ?, ?, ?)";
      connection.query(query, Object.values(data), (error)=>{
          if (error){
              res.json({status: "failure", reason: error.code});
          }else{
              res.json({status: "success", data: data});            
          }
      });

    }catch(e){
      // console.log("nganu");
      res.json({status: "failure", reason: e});
    }
  })


//get user data according to ID
app.route('/user/:userId')
  .get(function(req, res, next) {
    connection.query(
      'SELECT * FROM user WHERE id = ?', req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });

//get all questions in the database 
app.route('/test')
  .get(function(req, res, next) {
    connection.query(
      'SELECT * FROM questions',
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});
//Count all the questions in 'questions table'
app.route('/count')
  .get(function(req, res, next) {
    connection.query(
      'SELECT count(*) FROM questions',
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });
  //Get specific question and answer according to the question ID
  app.route('/test/:questionId')
  .get(function(req, res, next) {
    const data = req.params.questionId;

    const sql = "SELECT * FROM questions WHERE id = ?";
    connection.query(sql, data, function(err, question) {
      if (err) {
        return console.log('error: ' + err.message);
      }
      const sql = "SELECT * FROM answer WHERE question_id = ?";
      connection.query(sql, data, function(err, answer) {
        if (err) {
          return console.log('error: ' + err.message);
        }
        //send the freakin thing out
        res.json({
          Question: question,
          Answer: answer
        });
      });
    });
  });

//get a specific venture
app.route('/usaha/:usahaId')
  .get(function(req, res, next) {
    connection.query(
      'select * from result where id = ?', req.params.usahaId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
  });


  //post hasil test ke history
  //in construction
  app.post("/history", async(req, res) =>{
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    const data = {
        id_user: req.body.id_user,
        result: req.body.result,
        description: req.body.description,
        percentage: req.body.percentage,
        time: formatted
    }
    const query = "INSERT INTO history(id_user,result,description,percentage,time) VALUES (?, ?, ?, ?, ?)";
    connection.query(query, Object.values(data), (error)=>{
        if (error){
            res.json({status: "failure", reason: error.code});
        }else{
            res.json({status: "success", data: data});            
        }
    });
});

//ambil history test user dari database
app.route('/test/history/:userId')
  .get(function(req, res, next) {
    connection.query(
      'select * from history where id_user = ?', req.params.userId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
});

app.delete("/test/history/delete", async(req, res) =>{
    const data = {
        id: req.body.id
    }
    const query = "DELETE FROM history where id = ?";
    connection.query(query, Object.values(data), (error)=>{
        if (error){
            res.json({status: "Fail, data not deleted", reason: error.code});
        }else{
            res.json({status: "Data successfully Deleted", data: data});            
        }
    });
});


app.get('/status', (req, res) => res.send('Working!'));

// Port 8080 for Google App Engine
app.set('port', process.env.PORT || 3000);
app.listen(3000);