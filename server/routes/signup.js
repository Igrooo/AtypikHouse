import db from '../modules/db';

let express = require("express");
let signup    = express.Router();

signup.post('/signup', (req, res) =>{ 
  
    let type      = JSON.stringify(req.body.type);
    let name      = JSON.stringify(req.body.name);
    let firstname = JSON.stringify(req.body.prenom);
    let address   = JSON.stringify(req.body.prenom);
    let zipcode   = JSON.stringify(req.body.zipcode);
    let city      = JSON.stringify(req.body.city);
    let email     = JSON.stringify(req.body.email);
    let password  = JSON.stringify(req.body.password);   
  
    if(req.body.email && req.body.password && req.body.verifPassword && req.body.nom && req.body.prenom){
  
      if(req.body.password != req.body.verifPassword){
        res.status(500).send({
          message: 'Wrong password.'
        })
      }
  
      db.query("SELECT * FROM ah_users WHERE `email` = " + "'" + req.body.email + "'" , (err, result) =>{
  
        if(err){
          return res.status(500).send(err);
        }
        if (result.length > 0) { 
          res.status(200).send({
            message: 'E-mail already use.'
          })
        }else{
          db.query("INSERT INTO ah_users (type, email, password, name, firstname, address, zipcode, city) VALUES ("+type+"," +email+ ", "+password+", " +name+ ", " +firstname+ ", " +address+ ", " +zipcode+ ", " +city+ ")");
          res.status(200).send({
            message: 'New user created.' 
          })
        }
      })
    }else{
        return res.status(500).send({
            message: "Missing data."
        });
      }
  });

export default signup;


