let express = require('express');
import connection from '../modules/dbConnection';

let houses = express.Router();
let categoryID;

houses.post('houses', function (req, res) {

    console.log(categoryID);
    categoryID = req.body.category;
    if(categoryID == null ){
        connection.query("SELECT * FROM ah_houses", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });
    }else{
        connection.query("SELECT * FROM ah_houses WHERE ID_category = " + "'" + categoryID + "'", (err, result) => {
            if (err){
                throw(err);
            }
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });

    };

});

export default houses;