import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let addCategory = express.Router();

   



addCategory.post('/addCategory', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var title = JSON.stringify(req.body.title);
    var description = JSON.stringify(req.body.description);
   
   

    if(req.body.title && req.body.description){

        connection.query("INSERT INTO ah_categories (title, description) VALUES (" +title+ ", " +description+ ")");
          res.status(200).send({
            message: 'Votre catégorie a été ajoutée avec succes !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default addCategory;