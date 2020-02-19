import db from '../modules/db';

let express = require('express');
let select = express.Router();
let tableprefix = "ah_";

select.get('/select/:tablename', function (req, res) {
    db.query("SELECT * FROM " + tableprefix + req.params.tablename, (err, result) => {
        if (err) throw(err);
        res.status(200).send({
            status: true,
            content: result
        })
    });
});

select.get('/select/:tablename/:ID', function (req, res) {
    db.query("SELECT * FROM " + tableprefix + req.params.tablename + " WHERE ID=" + req.params.ID, (err, result) => {
        if (err) throw(err);
        res.status(200).send({
            status: true,
            content: result[0]
        })
    });
});

export default select;