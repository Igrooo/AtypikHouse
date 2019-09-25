import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let updateActivity_type = express.Router();

   



updateActivity_type.post('/updateActivity_type', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var title = JSON.stringify(req.body.title);
 
   

    if(req.body.title ){

        connection.query("UPDATE ah_activities_types SET titre="+title+" ");
          res.status(200).send({
            message: 'Votre type activité a été modifié avec succes !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default updateActivity_type;