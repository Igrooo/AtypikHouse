import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let addActivity_type = express.Router();

   



addActivity_type.post('/addActivity_type', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var title = JSON.stringify(req.body.title);
 
   

    if(req.body.title ){

        connection.query("INSERT INTO ah_activities_types (titre) VALUES (" +title+")");
          res.status(200).send({
            message: 'Votre type activité a été ajoutée avec succes !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default addActivity_type;