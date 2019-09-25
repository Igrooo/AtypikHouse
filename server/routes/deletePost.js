import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let deletePost = express.Router();

   



deletePost.post('/deletePost', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var ID_post = JSON.stringify(req.body.ID_post);
    
   

    if(req.body.title ){

        connection.query("DELETE FROM ah_post WHERE id=" +ID_post+ "");
          res.status(200).send({
            message: 'Votre publication a été supprimée !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default deletePost;