// IMPORT ROUTES
//import bodyparser from 'body-parser'
import signup from './routes/users';
import login from './routes/connection';
//import house from './routes/houses';
import auth from './routes/middleware/token';
import addProduct from './routes/houses';
import updateProduct from './routes/houses';
import showProduct from './routes/houses';
import categorie from './routes/categories';
import insertbooking from './routes/booking';
import updatebooking from './routes/booking';
import deletebooking from './routes/booking';
import fetchbooking from './routes/booking';




const express = require("express");
const bodyparser = require("body-parser");
var app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());


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

app.use(bodyparser.urlencoded({
  extended: false
}));
app.use(bodyparser.json());

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
//app.use(house);

// ROUTE CATEGORIE // 

app.use(categorie);

// MIDDLEWARE D'AUTHENTIFICATION //////////////////////////

app.use(auth);

// ROUTE ADD PRODUCT // 

app.use(addProduct);

// ROUTE UPDATE PRODUCT // 
app.use(updateProduct);


// ROUTE DELETE PRODUCT // 

// ROUTE BOOKING // 

app.use(insertbooking);
app.use(updatebooking);
app.use(deletebooking);
app.use(fetchbooking);


