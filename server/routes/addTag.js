import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let addTag = express.Router();

   



addTag.post('/addTag', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    
     var type = JSON.stringify(req.body.type);    
     var tag = JSON.stringify(req.body.tag);
    
    
 
   

    if(req.body.type && req.body.tag && req.body.ID_house){

        connection.query("INSERT INTO ah_activities (type, tag) VALUES (" +type+ ", " +tag+ ")");
          res.type(200).send({
            message: 'Votre photo a été ajoutée avec succes !' 
          })
        
    }else{
        res.type(500).send({
            type: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default addTag;