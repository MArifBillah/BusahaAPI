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
//get one question from 'questions' table according to id
// app.route('/test/:questId/')
//   .get(function(req, res, next) {
//     connection.query(
//       'select * from questions where id = ?', req.params.questId,
//       function(error, results, fields) {
//         if (error) throw error;
//         res.json(results);
//       }
//     );
//   });

// test drive
  // app.route('/test/:questId/:answerId')
  //   .get(function(req, res, next) {
  //     connection.query(
  //       'SELECT * FROM questions, answer WHERE id = ? AND question_id = ?', req.params.questId, req.params.answerId,
  //       function(error, results, fields) {
  //         if (error) throw error;
  //         res.json(results);
  //       }
  //     );
  //   });
    app.get("/test", async(req, res) =>{
      // const data = {
      //     questId: req.params.questId,
      //     answerId: req.params.answerId
      // }
      connection.query("SELECT * FROM questions", function(error, patrol_result) {
        if (error) {
          return console.log('error: ' + error.message);
        }else{
          connection.query("SELECT * FROM answer", function(error, user_result) {
            if (error) {
              return console.log('error: ' + error.message);
            }
            res.render('patrol_schedule', {
              patrol: patrol_result,
              user: user_result
            });
          });

        }

      });
  });

  //get answers according to question id
  app.route('/test/answer/:questId')
  .get(function(req, res, next) {
    connection.query(
      'select * from answer where question_id = ?', req.params.questId,
      function(error, results, fields) {
        if (error) throw error;
        res.json(results);
      }
    );
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

//hapus history test user

// app.route('/test/history/delete/:historyid')
//   .delete(function(req, res, next) {
//     connection.query(
//       'delete from history where id = ?', req.params.historyid,
//       function(error, results, fields) {
//         if (error) throw error;
//         res.json(results);
//       }
//     );
//   });

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