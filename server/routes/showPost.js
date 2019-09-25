import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');
let showPost = express.Router();


showPost.get('/showPost', function (req, res) {
        connection.query("SELECT * FROM ah_posts", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result
            })
        });
});


showPost.get('/showPost/:id', function (req, res) {
        connection.query("SELECT * FROM ah_posts WHERE `ID`= " + "'" + req.params.id + "'", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });
});



export default showPost;