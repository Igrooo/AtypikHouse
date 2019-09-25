import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let deletePayment = express.Router();

   



deletePayment.post('/deletePayment', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var ID_payment = JSON.stringify(req.body.ID_payment);
    
   

    if(req.body.title ){

        connection.query("DELETE FROM ah_payments WHERE id=" +ID_payment+ "");
          res.status(200).send({
            message: 'Votre payement a été supprimée !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default deletePayment;