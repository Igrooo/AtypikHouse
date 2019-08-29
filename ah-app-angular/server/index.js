const express = require("express");
const bodyParser = require("body-parser");
var mysql = require('mysql');
var app = express();
let jwt = require('jsonwebtoken');

const connection = require ("./modules/dbConnection.js");

// IMPORT ROUTES

import signup from './routes/signup-route';
import login from './routes/login-route';
import houses from './routes/houses-route';
import auth from './routes/middleware/token';



// Connexion to server

var port = process.env.PORT || 1407;
app.listen(port, (err) => {
    if(err){
        console.log('error when connecting to port ' + port);
    }else{
        console.log('App listen. Running on port ' + port );
    }
})

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//CORS cross-origin

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, token');
  //intercept OPTIONS method;
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});



// ROUTE SIGNUP // 

app.use(signup);

// ROUTE LOGIN // 

app.use(login);

// ROUTE SHOW PRODUCT//

app.use(houses);

// MIDDLEWARE D'AUTHENTIFICATION //////////////////////////

app.use(auth);
 

// ROUTE ADD PRODUCT // 


// ROUTE UPDATE PRODUCT // 



// ROUTE DELETE PRODUCT // 


