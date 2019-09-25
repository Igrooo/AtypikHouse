import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let deleteUser = express.Router();

   



deleteUser.post('/deleteUser', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var ID_user = JSON.stringify(req.body.ID_user);
    
   

    if(req.body.title ){

        connection.query("DELETE FROM ah_users WHERE id=" +ID_user+ "");
          res.status(200).send({
            message: 'Votre compte a été supprimée !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default deleteUser;