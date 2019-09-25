import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let deleteCategory = express.Router();

   



deleteCategory.post('/deleteCategory', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var ID_category = JSON.stringify(req.body.ID_category);
    
   

    if(req.body.title ){

        connection.query("DELETE FROM ah_categories WHERE id=" +ID_category+ "");
          res.status(200).send({
            message: 'Votre catégorie a été supprimée !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default deleteCategory;