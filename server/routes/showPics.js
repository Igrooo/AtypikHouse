import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');
let showPics = express.Router();


showPics.get('/showPics', function (req, res) {
        connection.query("SELECT * FROM ah_pics", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result
            })
        });
});


showPics.get('/showPics/:id', function (req, res) {
        connection.query("SELECT * FROM ah_pics WHERE `ID`= " + "'" + req.params.id + "'", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });
});



export default showPics;