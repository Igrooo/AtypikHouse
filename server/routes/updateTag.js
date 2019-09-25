import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let updateTag = express.Router();

   



updateTag.post('/updateTag', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    
     var type = JSON.stringify(req.body.type);    
     var tag = JSON.stringify(req.body.tag);
    
    
 
   

    if(req.body.type && req.body.tag && req.body.ID_house){

        connection.query("UPDATE ah_tags SET type=" +type+ ", tag=" +tag+ "");
          res.type(200).send({
            message: 'Votre tag a été modifié avec succes !' 
          })
        
    }else{
        res.type(500).send({
            type: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default updateTag;