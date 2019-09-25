import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let updatePost = express.Router();

   



updatePost.post('/updatePost', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    
      
     var date = JSON.stringify(req.body.date);
     var message = JSON.stringify(req.body.message);   
     var ID_house = JSON.stringify(req.body.ID_house);
     var ID_userForm = JSON.stringify(req.body.ID_userForm);
     var ID_userTo = JSON.stringify(req.body.ID_userTo);
    
 
   

    if(req.body.title && req.body.date && req.body.ID_house){

        connection.query("UPDATE ah_posts SET date=" +date+ ", message=" +message+ ", ID_house="+ID_house+", ID_userForm=" +ID_userForm+ ",ID_userTo=" +ID_userTo+ "");
          res.title(200).send({
            message: 'Votre post a été modifiée avec succes !' 
          })
        
    }else{
        res.title(500).send({
            title: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default updatePost;