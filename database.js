const mysql = require('mysql');
const firebase = require("firebase-admin");
const fireb = require('firebase/app');

// var firebaseConfig = {
//   apiKey: "AIzaSyBMVbnRQF6agOjlvR39imuGf_ckk7f4Uvs",
//   authDomain: "webapitesting-96ad3.firebaseapp.com",
//   projectId: "webapitesting-96ad3",
//   storageBucket: "webapitesting-96ad3.appspot.com",
//   messagingSenderId: "371732954985",
//   appId: "1:371732954985:web:d5d8cf795dba16558707f8",
//   measurementId: "G-857MFMNRSV"
// };

var firebaseConfig = {
  apiKey: "AIzaSyDf5XUb2UPJvQu6nzPKDgR-GpUG49v-vVY",
  authDomain: "busaha.firebaseapp.com",
  projectId: "busaha",
  storageBucket: "busaha.appspot.com",
  messagingSenderId: "721677036288",
  appId: "1:721677036288:web:ecdc893bbd100fbd6161e5",
  measurementId: "G-JR3XJJK4TG"
}
var serviceAccount = require("./credential.json");

fireb.initializeApp(firebaseConfig);

firebase.initializeApp({
credential: firebase.credential.cert(serviceAccount)
});

let connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS
});

  // connection.connect(function(err) {
  //   if (err) {
  //     console.error('Error connecting: ' + err.stack);
  //     return;
  //   }
  //   console.log('Connected as thread id: ' + connection.threadId);
  // });

  module.exports = connection;
  // module.exports = fire;