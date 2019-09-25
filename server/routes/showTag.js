import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');
let showTag = express.Router();


showTag.get('/showTag', function (req, res) {
        connection.query("SELECT * FROM ah_tags", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result
            })
        });
});


showTag.get('/showTag/:id', function (req, res) {
        connection.query("SELECT * FROM ah_tags WHERE `ID`= " + "'" + req.params.id + "'", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });
});



export default showTag;