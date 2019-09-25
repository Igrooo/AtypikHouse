import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let updateCategory = express.Router();

   



updateCategory.post('/updateCategory', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var title = JSON.stringify(req.body.title);
    var description = JSON.stringify(req.body.description);
   
   

    if(req.body.title && req.body.description){

        connection.query("UPDATE ah_categories SET title=" +title+ ", description=" +description+ "");
          res.status(200).send({
            message: 'Votre catégorie a été modifiée avec succes !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default updateCategory;