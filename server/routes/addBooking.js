import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let addBooking = express.Router();

   



addBooking.post('/addBooking', function (req, res) {

    
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

        connection.query("INSERT INTO ah_booking (nbPersons, date, dateStart, dateEnd, status, ID_user, ID_house) VALUES (" +nbPersons+ ", " +date+ ", " +dateStart+ ", "+dateEnd+", "+status+", "+ID_user+","+ID_house+")", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result
            })
        });

        
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default addBooking;