import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');
let showComment = express.Router();


showComment.get('/showComment', function (req, res) {
        connection.query("SELECT * FROM ah_comments", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result
            })
        });
});


showComment.get('/showComment/:id', function (req, res) {
        connection.query("SELECT * FROM ah_comments WHERE `ID`= " + "'" + req.params.id + "'", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });
});



export default showComment;