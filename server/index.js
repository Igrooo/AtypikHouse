// IMPORT ROUTES


import login from './routes/connection';
import auth from './routes/middleware/token';

// ADD IMPORTS ROUTES //
import addActivity_type from './routes/addActivity_type';
import addActivity from './routes/addActivity';
import addBooking from './routes/addBooking';
import addCategory from './routes/addCategory';
import addComment from './routes/addComment';
import addPayment from './routes/addPayment';
import addPics from './routes/addPics';
import addPost from './routes/addPost';
import addProduct from './routes/addproduct';
import addTag from './routes/addTag';
import signup from './routes/addUser';

// UPDATE IMPORTS ROUTES //
import updateActivity_type from './routes/updateActivity_type';
import updateActivity from './routes/updateActivity';
import updateBooking from './routes/updateBooking';
import updateCategory from './routes/updateCategory';
import updateComment from './routes/updateComment';
import updatePayment from './routes/updatePayment';
import updatePics from './routes/updatePics';
import updatePost from './routes/updatePost';
import updateProduct from './routes/updateProduct';
import updateTag from './routes/updateTag';
import updateUser from './routes/updateUser';

// SHOW IMPORTS ROUTES //
import showActivity from './routes/showActivity';
import showActivity_types from './routes/showActivity_types';
import showBooking from './routes/showBooking';
import showCategory from './routes/showCategory';
import showComment from './routes/showComment';
import showPayment from './routes/showPayment';
import showPics from './routes/showPics';
import showPost from './routes/showPost';
import showProduct from './routes/showproduct';
import showTag from './routes/showTag';
import showUser from './routes/showUser';





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



app.use(addActivity_type);
app.use(addActivity);
app.use(addBooking);
app.use(addCategory);
app.use(addComment);
app.use(addPayment);
app.use(addPics);
app.use(addPost);
app.use(addProduct);
app.use(addTag);
app.use(signup);

app.use(updateActivity_type);
app.use(updateActivity);
app.use(updateBooking);
app.use(updateCategory);
app.use(updateComment);
app.use(updatePayment);
app.use(updatePics);
app.use(updatePost);
app.use(updateProduct);
app.use(updateTag);
app.use(updateUser);


app.use(showActivity);
app.use(showActivity_types);
app.use(showBooking);
app.use(showCategory);
app.use(showComment);
app.use(showPayment);
app.use(showPics);
app.use(showPost);
app.use(showProduct);
app.use(showTag);
app.use(showUser);







// MIDDLEWARE D'AUTHENTIFICATION //////////////////////////

app.use(auth);

// ROUTE ADD PRODUCT // 



/*
app.use(insertbooking);
app.use(updatebooking);
app.use(deletebooking);
app.use(fetchbooking);


*/