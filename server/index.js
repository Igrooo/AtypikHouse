import auth   from './routes/middleware/auth';

// IMPORT PUBLIC ROUTES
import login  from './routes/public/login';
import signup from './routes/public/signup';
import select from './routes/public/select';

// IMPORT PRIVATE ROUTES
import privateSelect from './routes/private/select';
import insert from './routes/private/insert';
import update from './routes/private/update';
import remove from './routes/private/remove';

const express = require("express");
const bodyparser = require("body-parser");
let app = express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

// Connexion to server
let port = process.env.PORT || 1407;
app.listen(port, (err) => {
    if(err){
        console.log('error when connecting to port ' + port);
    }else{
        console.log('App listen. Running on port ' + port );
    }
})

app.use(bodyparser.urlencoded({extended: false}));
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

// PUBLIC ROUTE SELECT //
app.use(select);
// ROUTE LOGIN // 
app.use(login);
// ROUTE SIGNUP //
app.use(signup);

// MIDDLEWARE D'AUTHENTIFICATION //////////////////////////
app.use(auth);

// USERS // ADMIN //
app.use(privateSelect);
app.use(insert);
app.use(update);
app.use(remove);