let express = require('express');
import connection from './../modules/dbConnection';


let showProducts = express.Router();



showProducts.get('/showProducts', function (req, res) {
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


showProducts.get('/showProducts/:id', function (req, res) {
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

export default showProducts;