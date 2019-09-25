import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let addPost = express.Router();

   



addPost.post('/addPost', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    
      
     var date = JSON.stringify(req.body.date);
     var message = JSON.stringify(req.body.message);   
     var ID_house = JSON.stringify(req.body.ID_house);
     var ID_userForm = JSON.stringify(req.body.ID_userForm);
     var ID_userTo = JSON.stringify(req.body.ID_userTo);
    
 
   

    if(req.body.title && req.body.date && req.body.ID_house){

        connection.query("INSERT INTO ah_posts(date, message, ID_house, ID_userForm,ID_userTo) VALUES (" +date+ "," +message+ ", "+ID_house+"," +ID_userForm+ "," +ID_userTo+ ")");
          res.title(200).send({
            message: 'Votre photo a été ajoutée avec succes !' 
          })
        
    }else{
        res.title(500).send({
            title: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default addPost;