import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');
let showUser = express.Router();


showUser.get('/showUser', function (req, res) {
        connection.query("SELECT * FROM ah_users", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result
            })
        });
});


showUser.get('/showUser/:id', function (req, res) {
        connection.query("SELECT * FROM ah_users WHERE `ID`= " + "'" + req.params.id + "'", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });
});



export default showUser;