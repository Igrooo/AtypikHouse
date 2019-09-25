import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let addPayment = express.Router();

   



addPayment.post('/addPayment', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    
     var status = JSON.stringify(req.body.status);
     var amount = JSON.stringify(req.body.amount);
     var date = JSON.stringify(req.body.date);
     var ID_user = JSON.stringify(req.body.ID_user);
     var ID_booking = JSON.stringify(req.body.ID_booking);
 
   

    if(req.body.status && req.body.amount && req.body.date && req.body.ID_user && req.body.ID_booking){

        connection.query("INSERT INTO ah_payments (status, amount, date, ID_user, ID_booking) VALUES (" +status+ ", " +amount+ ", " +date+ ", "+ID_user+", "+ID_booking+")");
          res.status(200).send({
            message: 'Votre payment a été éffectué avec succes !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default addPayment;