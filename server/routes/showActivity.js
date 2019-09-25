import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');
let showActivity = express.Router();


showActivity.get('/showActivity', function (req, res) {
        connection.query("SELECT * FROM ah_activities", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result
            })
        });
});


showActivity.get('/showActivity/:id', function (req, res) {
        connection.query("SELECT * FROM ah_activities WHERE `ID`= " + "'" + req.params.id + "'", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });
});



export default showActivity;