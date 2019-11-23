import connection from '../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');
let showProduct = express.Router();


showProduct.get('/showProduct', function (req, res) {
        connection.query("SELECT * FROM ah_houses", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result
            })
        });
});


showProduct.get('/showProduct/:id', function (req, res) {
        connection.query("SELECT * FROM ah_houses WHERE `ID`= " + "'" + req.params.id + "'", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });
});



export default showProduct;