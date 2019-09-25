import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let addBooking = express.Router();

   



addBooking.post('/addBooking', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var nb_persons = JSON.stringify(req.body.nb_persons);
     var date = JSON.stringify(req.body.date);
     var date_start = JSON.stringify(req.body.date_start);
     var date_end = JSON.stringify(req.body.date_end);
     var status = JSON.stringify(req.body.status);
     var ID_user = JSON.stringify(req.body.ID_user);
     var ID_house = JSON.stringify(req.body.ID_house);
 
   

    if(req.body.nb_persons && req.body.date && req.body.date_start && req.body.date_end && req.body.status && req.body.ID_user && req.body.ID_house){

        connection.query("UPDATE ah_booking SET nb_persons=" +nb_persons+ ", date=" +date+ ", date_start=" +date_start+ ", date_end="+date_end+", status="+status+", ID_user="+ID_user+", ID_house="+ID_house+"");
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


export default addBooking;