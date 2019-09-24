let express = require('express');
import connection from './../modules/dbConnection';


let categorie = express.Router();



categorie.get('/categories', function (req, res) {
        connection.query("SELECT * FROM ah_categories", (err, result) => {

            console.log(result);
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result
            })
        });
});

categorie.get('/categories/:id', function (req, res) {
        connection.query("SELECT * FROM ah_categories WHERE `ID`= " + "'" + req.params.id + "'", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });    
});

export default categorie;