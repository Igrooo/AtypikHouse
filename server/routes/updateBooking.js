import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let updateBooking = express.Router();

   



updateBooking.post('/updateBooking', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var nbPersons = JSON.stringify(req.body.nbPersons);
     var date = JSON.stringify(req.body.date);
     var dateStart = JSON.stringify(req.body.dateStart);
     var dateEnd = JSON.stringify(req.body.dateEnd);
     var status = JSON.stringify(req.body.status);
     var ID_user = JSON.stringify(req.body.ID_user);
     var ID_house = JSON.stringify(req.body.ID_house);
 
   

    if(req.body.nbPersons && req.body.date && req.body.dateStart && req.body.dateEnd && req.body.status && req.body.ID_user && req.body.ID_house){

        connection.query("UPDATE ah_booking SET nbPersons=" +nbPersons+ ", date=" +date+ ", dateStart=" +dateStart+ ", dateEnd="+dateEnd+", status="+status+", ID_user="+ID_user+", ID_house="+ID_house+"");
          res.status(200).send({
            message: 'Votre réservation a été modifiée avec succes !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default updateBooking;