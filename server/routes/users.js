const express = require("express");
let signup  =   express.Router();
let update_user = express.Router();
let delete_user = express.Router();
import connection from './../modules/dbConnection';

    

signup.post('/signup', (req, res) =>{ 
  
 var type = JSON.stringify(req.body.type);
    var name = JSON.stringify(req.body.name);
    var firstname = JSON.stringify(req.body.prenom);
    var address = JSON.stringify(req.body.prenom);
    var zipcode = JSON.stringify(req.body.zipcode);
    var city = JSON.stringify(req.body.city);
    var email = JSON.stringify(req.body.email);
    var password = JSON.stringify(req.body.password);   
  
    if(req.body.email && req.body.password && req.body.verifPassword && req.body.nom && req.body.prenom){
  
      if(req.body.password != req.body.verifPassword){
        res.status(500).send({
          message: "Vérifiez que vos passwords soient identiques"
        })
      }
  
      connection.query("SELECT * FROM ah_users WHERE `email` = " + "'" + req.body.email + "'" , (err, result) =>{
  
        if(err){
          return res.status(500).send(err);
        }
        if (result.length > 0) { 
          res.status(200).send({
            message: 'Cet E-mail est déjà utilisé, veuillez en utiliser un autre !'
          })
        }else{
          connection.query("INSERT INTO ah_users (type, email, password, name, firstname, address, zipcode, city) VALUES ("+type+"," +email+ ", "+password+", " +name+ ", " +firstname+ ", " +address+ ", " +zipcode+ ", " +city+ ")")
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

update_user.post('/update',(req,res) =>{

      

  
    if(req.body.email && req.body.password && req.body.verifPassword && req.body.nom && req.body.prenom){
  
      if(req.body.password != req.body.verifPassword){
        res.status(500).send({
          message: "Vérifiez que vos passwords soient identiques"
        })
      }
  
      connection.query("SELECT * FROM ah_users WHERE `email` = " + "'" + req.body.email + "'" , (err, result) =>{
  
        if(err){
          return res.status(500).send(err);
        }
        else{
          connection.query("UPDATE ah_users SET type="+type+" email="+email+", password="+password+", name="+name+", firstname="+firstname+",address="+address+",zipcode="+zipcode+",city="+city+")")
          res.status(200).send({
            message: 'Votre compte utilisateur a bien été Modifié !' 
          })
        }
      })
    }else{
        return res.status(500).send({
            message: "Vous devez remplir tout les champs !"
          
        });
      }

});
delete_user.post('/delete',(req,res) =>{

 
 if(req.body.email && req.body.password && req.body.verifPassword && req.body.nom && req.body.prenom){

  
   connection.query("SELECT * FROM ah_users WHERE `email` = " + "'" + req.body.email + "'" , (err, result) =>{

     if(err){
       return res.status(500).send(err);
     }
      else{
       connection.query("DELETE FROM ah_users WHERE email="+email+", name="+name+")")
       res.status(200).send({
         message: 'Votre compte utilisateur a été supprimé !' 
       })
     }
   })
 }else{
     return res.status(500).send({
         message: "Vous devez remplir les champs !"
       
     });
   }

});