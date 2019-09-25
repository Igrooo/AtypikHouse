import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let addComment = express.Router();

   



addComment.post('/addComment', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    
     var comment = JSON.stringify(req.body.comment);
     var rating = JSON.stringify(req.body.rating);
     var date = JSON.stringify(req.body.date);
     var ID_user = JSON.stringify(req.body.ID_user);
     var ID_booking = JSON.stringify(req.body.ID_booking);
 
   

    if(req.body.comment && req.body.rating && req.body.date && req.body.ID_user && req.body.ID_booking){

        connection.query("INSERT INTO ah_comments (comment, rating, date, ID_user, ID_booking) VALUES (" +comment+ ", " +rating+ ", " +date+ ", "+ID_user+", "+ID_booking+")");
          res.status(200).send({
            message: 'Votre commentaire a été ajoutée avec succes !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default addComment;