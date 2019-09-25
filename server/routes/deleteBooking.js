import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let deleteBooking = express.Router();

   



deleteBooking.post('/deleteBooking', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var ID_booking = JSON.stringify(req.body.ID_booking);
    
   

    if(req.body.title ){

        connection.query("DELETE FROM ah_booking WHERE id=" +ID_booking+ "");
          res.status(200).send({
            message: 'Votre réservation a été supprimée !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default deleteBooking;