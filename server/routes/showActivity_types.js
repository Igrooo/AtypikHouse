import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');
let showActivity_types = express.Router();


showActivity_types.get('/showActivity_types', function (req, res) {
        connection.query("SELECT * FROM ah_activities_types", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result
            })
        });
});


showActivity_types.get('/showActivity_types/:id', function (req, res) {
        connection.query("SELECT * FROM ah_activities_types WHERE `ID`= " + "'" + req.params.id + "'", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });
});



export default showActivity_types;