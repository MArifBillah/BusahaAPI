require('dotenv').config()
const admin = require("firebase-admin");
const fireb = require('firebase/auth');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database');
const dateTime = require('node-datetime');
app.use(express.urlencoded({extended: true}));


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
              res.json({error: true, message: "User not created", reason: error.code});
          }else{
              res.json({error: false, message: "User Created"});            
          }
      });

    }catch(e){
      // console.log("nganu");
      res.json({status: "failure", reason: e});
    }
  })

  //Log in to firebase auth
  app.post("/signin", async (req, res) => {
    const user = {
      email : req.body.email,
      password: req.body.password
    }
    const email = user.email;
    const password = user.password;
    const auth = fireb.getAuth();
    fireb.signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        res.json({
          error: false,
          message: "Log in Success!",
          loginResult: {
            userID : user.uid,
            username : user.displayName,
            refreshToken: user.refreshToken,
            accessToken: user.accessToken
          }
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.json({error: true, message : "Email or Password wrong", code: errorCode, reason: errorMessage });
      });
  })


//get user data according to ID (DEPRECATED)
// app.route('/user/:userId')
//   .get(function(req, res, next) {

//     connection.query(
//       'SELECT * FROM user WHERE id = ?', req.params.userId,
//       function(error, results) {
//         if (error || results == 0){
//           res.json({
//             error : true,
//             message: "failed to retrieve user data",
//             reason: error
//           });
//         };
//         res.json({
//           error : false,
//           message : "success",
//           user : results
//         });
//       }
//     );
//   });
  //get user data according to ID
  app.route('/user/:userId')
  .get(function(req, res) {
    const data = req.params.userId;
    const sql = "SELECT * FROM user WHERE id = ?";
    connection.query(sql, data, function(err, result) {
      if (err || result == 0) {
        res.json({
          error : true,
          message: "failed to retrieve user data or user doesn't exist",
          reason: err
        });
      }else{
        res.json({
          error : false,
          message : "success",
          user : result
        });
      }
    });
  });

  //Count all question and then get all questions
  app.route('/test')
  .get(function(req, res, next) {
    const sql = "SELECT count(*) FROM questions";
    connection.query(sql, function(err, count) {
      if (err) {
        res.json({
          error : true,
          message: "failed to count questions",
          reason: err
        });
      }
      const sql = "SELECT * FROM questions";
      connection.query(sql, function(err, question) {
        if (err) {
          res.json({
            error : true,
            message: "failed to retrieve questions or table empty",
            reason: err
          });
        }else{
          //send the freakin thing out
          // var i = JSON.stringify(count);
          res.json({
            Error: false,
            Message: "Success",
            Count: count,
            Questions: question
          });
        }
      });
    });
  });

  //Get specific question and answer according to the question ID
  app.route('/test/:questionId')
  .get(function(req, res, next) {
    const data = req.params.questionId;

    const sql = "SELECT * FROM questions WHERE id = ?";
    connection.query(sql, data, function(err, question) {
      if (err || question == 0) {
        res.json({
          error : true,
          message: "failed to retrieve question or question empty",
          reason: err
        });
      }else{
        const sql = "SELECT * FROM answer WHERE question_id = ?";
        connection.query(sql, data, function(err, answer) {
          if (err || answer == 0) {
            res.json({
              error : true,
              message: "failed to retrieve answer or answer empty",
              reason: err
            });
          }else{
                        //send the freakin thing out
            res.json({
              error : false,
              message : "Success", 
              question : question,
              answer : answer
            });
          }
        });
      }

    });
  });

//Get one saved answer according to the question id and user id
app.get("/test/:questionId/:userId", async(req, res) =>{
  const data = {
      qid: req.params.questionId,
      uid: req.params.userId
  }
  const sql = "SELECT id, id_answer FROM saved WHERE id_question = ? AND id_user = ?";
  connection.query(sql, Object.values(data), function(err, userAnswer) {
    if (err) {
      res.json({
        error : true,
        message: "failed to retrieve user's answer",
        reason: err
      });
    }else{
      res.json({
        error : false,
        message : "success",
        Answer : userAnswer
      });
    }
  });
});

//post or update saved answer to 'answer' table
app.patch("/test/:questionId/:userId/:answerId", async(req, res) =>{
  const data = {
      sid: req.body.sid,
      qid: req.params.questionId,
      uid: req.params.userId,
      aid: req.params.answerId
  }
  const sql = "INSERT INTO saved VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE id_answer=?;";
  connection.query(sql, [data.sid, data.uid, data.qid, data.aid, data.aid], function(err, userAnswer) {
    if (err) {
      // console.log(sql);
      res.json({
        error : true,
        message: "failed to save user's answer",
        reason: err
      });
    }else{
      //send the freakin thing out
      res.json({
        error : false,
        message : "success",
        data : data
      });
    }

  });
});

//get a specific venture
app.route('/usaha/:usahaId')
  .get(function(req, res, next) {
    connection.query(
      'select * from result where id = ?', req.params.usahaId,
      function(error, results) {
        if (error){
          res.json({
            error : true,
            message : "failed to retrieve",
            result : results
          });
        }else{
          res.json({
            error : false,
            message : "success",
            result : results
          });
        }
      }
    );
  });

//Get all saved answer according to the user id
app.get("/answered/:userId", async(req, res) =>{
  const data = req.params.userId;
  const sql = "SELECT * FROM saved WHERE id_user = ? ORDER BY id_question ASC";
  connection.query(sql, data, function(err, userAnswer) {
    if (err || userAnswer == 0) {
      res.json({
        error: true,
        message: "failed to retrieve user answer, user probably haven't answered or user doesn't exist",
        answered : userAnswer
      });
    }else{
      res.json({
        error: false,
        message: "success",
        answered : userAnswer
      });
    }
  });
});

//delete all saved answer according to the user id
app.delete("/answered/clean/:userId", async(req, res) =>{
  const data = req.params.userId;
  const sql = "DELETE FROM saved WHERE id_user = ?";
  connection.query(sql, data, function(err, deleted) {
    if (err || deleted.affectedRows == 0) {
      res.json({error : true, message: "failed to delete user answer or user doesn't exist or answer already empty", data: deleted});   
    }else{
      res.json({error : false, message: "Data successfully Deleted", DataDeleted: deleted.affectedRows, userID : data});    
    }
  });
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
        if (error || data.id_user == 0 || data.result == 0 || data.description == 0 || data.percentage == 0){
            res.json({error : true, message: "failure, error or one of the field is null", reason: error});
        }else{
            res.json({error : false, message: "success", data: data});            
        }
    });
});

//GET history test user from database
app.route('/history/:userId')
  .get(function(req, res, next) {
    connection.query(
      'SELECT * FROM history WHERE id_user = ?', req.params.userId,
      function(error, result) {
        if (error){
          res.json({error : true, message: "failure", reason: error});
        }else{
          res.json({error : false, message: "success", data: result});            
      }
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
            res.json({error : true, message: "Fail, data not deleted", reason: error.code});
        }else{
            res.json({error : false, message: "Data successfully Deleted", data: data});            
        }
    });
});


app.get('/status', (req, res) => res.send('Working!'));

// Port 8080 for Google App Engine
const port = process.env.PORT || 8080;
app.listen(port, () => {
	console.log(process.env.DB_USER);
	console.log(process.env.DB_NAME);
	console.log(process.env.DB_PASS)
console.log(process.env.INSTANCE_CONNECTION_NAME);
console.log(`/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`);
  console.log('Hello world listening on port', port);
});
