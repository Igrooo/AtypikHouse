// IMPORT ROUTES
import login   from './routes/login';
import signup  from './routes/signup';
import auth    from './routes/middleware/token';

// SELECT ROUTES //
import select  from './routes/select';

// INSERT ROUTES //
import insert from './routes/insert';

// UPDATE ROUTES //
import update from './routes/update';

// DELETE ROUTES //
import remove  from './routes/remove';

const express = require("express");
const bodyparser = require("body-parser");
let app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

const db = require ("./modules/db.js");

// Connexion to server
let port = process.env.PORT || 1407;
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
    res.sendStatus(200);
  } else {
    next();
  }
});

// ROUTE LOGIN // 
app.use(login);

// ROUTE SIGNUP //
app.use(signup);

app.use(select);

app.use(insert);
app.use(update);
app.use(remove);

// MIDDLEWARE D'AUTHENTIFICATION //////////////////////////
//app.use(auth);
