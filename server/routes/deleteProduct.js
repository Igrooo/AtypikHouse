import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let deleteProduct = express.Router();

   



deleteProduct.post('/deleteProduct', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var ID_product = JSON.stringify(req.body.ID_product);
    
   

    if(req.body.title ){

        connection.query("DELETE FROM ah_houses WHERE id=" +ID_product+ "");
          res.status(200).send({
            message: 'Votre annonce a été supprimée !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default deleteProduct;