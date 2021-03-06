import db from '../../modules/db';

let express = require("express");
let signup    = express.Router();

signup.post('/signup', (req, res) =>{ 
  
  if(req.body.type && req.body.email && req.body.password && req.body.name && req.body.firstname && req.body.address && req.body.city && req.body.siret){

      let type      = JSON.stringify(req.body.type);
      let email     = JSON.stringify(req.body.email);
      let password  = JSON.stringify(req.body.password);
      let name      = JSON.stringify(req.body.name);
      let firstname = JSON.stringify(req.body.firstname);
      let address   = JSON.stringify(req.body.address);
      let zipcode   = JSON.stringify(req.body.zipcode);
      let city      = JSON.stringify(req.body.city);
      let siret     = JSON.stringify(req.body.siret);
      
      db.query("SELECT * FROM ah_users WHERE `email` = " + "'" + req.body.email + "'" , (err, result) =>{

        if(err){
          res.status(500).send(err);
        }
        if (result.length > 0) { 
          res.status(500).send({
            status: false,
            message: 'E-mail already use.'
          })
        }else{
          db.query("INSERT INTO ah_users (type, email, password, name, firstname, address, zipcode, city, siret) VALUES ("+type+"," +email+ ", "+password+", " +name+ ", " +firstname+ ", " +address+ ", " +zipcode+ ", " +city+ ", " +siret+ ")");
          res.status(200).send({
            message: 'New user created. ID: '+ result.insertId,
            content: result.insertId
          })
        }
      })
  }else{
    res.status(500).send({
      status: false,
      message: 'INSERT error: data missing for ' + req.params.tablename
  })
  }
});

export default signup;


