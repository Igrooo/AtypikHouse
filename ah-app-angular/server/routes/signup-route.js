const express = require("express");
let signup  =   express.Router();
import connection from './../modules/dbConnection';

signup.post('/signup', (req, res) =>{

    var nom = JSON.stringify(req.body.nom);
    var password = JSON.stringify(req.body.password);
    var prenom = JSON.stringify(req.body.prenom);
    var email = JSON.stringify(req.body.email);
  
    console.log('test');
  
    if(req.body.email && req.body.password && req.body.verifPassword && req.body.nom && req.body.prenom){
  
      if(req.body.password != req.body.verifPassword){
        res.status(500).send({
          message: "Vérifiez que vos passwords soient identiques"
        })
      }
  
      connection.query("SELECT * FROM utilisateurs WHERE `EMAIL` = " + "'" + req.body.email + "'" , (err, result) =>{
  
        if(err){
          return res.status(500).send(err);
        }
        if (result.length > 0) { 
          res.status(200).send({
            message: 'Cet E-mail est déjà utilisé, veuillez en utiliser un autre !'
          })
        }else{
          connection.query("INSERT INTO utilisateurs (EMAIL, NOM, PRÉNOM) VALUES (" +email+ ", " +nom+ ", " +prenom+ ")")
          res.status(200).send({
            message: 'Votre compte utilisateur a bien été créé !' 
          })
        }
      })
    }else{
        return res.status(500).send({
            message: "Vous devez remplir tout les champs !"
          
        });
      }
  });

export default signup;
