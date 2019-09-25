import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');
let showPayment = express.Router();


showPayment.get('/showPayment', function (req, res) {
        connection.query("SELECT * FROM ah_payments", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result
            })
        });
});


showPayment.get('/showPayment/:id', function (req, res) {
        connection.query("SELECT * FROM ah_payments WHERE `ID`= " + "'" + req.params.id + "'", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });
});



export default showPayment;