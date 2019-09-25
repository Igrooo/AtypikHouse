import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let deleteComment = express.Router();

   



deleteComment.post('/deleteComment', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var ID_comment = JSON.stringify(req.body.ID_comment);
    
   

    if(req.body.title ){

        connection.query("DELETE FROM ah_comments WHERE id=" +ID_comment+ "");
          res.status(200).send({
            message: 'Votre commentaire a été supprimé !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default deleteComment;