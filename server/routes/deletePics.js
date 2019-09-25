import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let deletePics = express.Router();

   



deletePics.post('/deletePics', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var ID_Pics = JSON.stringify(req.body.ID_Pics);
    
   

    if(req.body.title ){

        connection.query("DELETE FROM ah_pics WHERE id=" +ID_Pics+ "");
          res.status(200).send({
            message: 'Votre photo a été supprimée !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default deletePics;