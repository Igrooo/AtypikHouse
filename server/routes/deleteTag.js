import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let deleteTag = express.Router();

   



deleteTag.post('/deleteTag', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var ID_tag = JSON.stringify(req.body.ID_tag);
    
   

    if(req.body.title ){

        connection.query("DELETE FROM ah_tag WHERE id=" +ID_tag+ "");
          res.status(200).send({
            message: 'Votre tag a été supprimée !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default deleteTag;