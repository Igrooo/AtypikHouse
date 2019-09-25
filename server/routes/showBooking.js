import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');
let showBooking = express.Router();


showBooking.get('/showBooking', function (req, res) {
        connection.query("SELECT * FROM ah_booking", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result
            })
        });
});


showBooking.get('/showBooking/:id', function (req, res) {
        connection.query("SELECT * FROM ah_booking WHERE `ID`= " + "'" + req.params.id + "'", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });
});



export default showBooking;