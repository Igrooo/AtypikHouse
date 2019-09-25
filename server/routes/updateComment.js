import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let updateComment = express.Router();

   



updateComment.post('/updateComment', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    
     var comment = JSON.stringify(req.body.comment);
     var rating = JSON.stringify(req.body.rating);
     var date = JSON.stringify(req.body.date);
     var ID_user = JSON.stringify(req.body.ID_user);
     var ID_booking = JSON.stringify(req.body.ID_booking);
 
   

    if(req.body.comment && req.body.rating && req.body.date && req.body.ID_user && req.body.ID_booking){

        connection.query("UPDATE ah_comments SET comment=" +comment+ ", rating=" +rating+ ", date=" +date+ ", ID_user="+ID_user+", ID_booking="+ID_booking+"");
          res.status(200).send({
            message: 'Votre commentaire a été Modifié avec succes !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default updateComment;