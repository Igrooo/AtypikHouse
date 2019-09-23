// IMPORT ROUTES
import bodyparser from 'body-parser'
import signup from './routes/signup-route';
import login from './routes/login-route';
import showProduct from './routes/showProduct-route';
import auth from './routes/middleware/token';
import addProduct from './routes/addProduct-route';
import categorie from './routes/categorie-route';


const express = require("express");
const bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const connection = require ("./modules/dbConnection.js");

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

app.use(showProduct);

// ROUTE CATEGORIE // 

app.use(categorie);

// MIDDLEWARE D'AUTHENTIFICATION //////////////////////////

app.use(auth);

// ROUTE ADD PRODUCT // 

app.use(addProduct);

// ROUTE UPDATE PRODUCT // 


// ROUTE DELETE PRODUCT // 


