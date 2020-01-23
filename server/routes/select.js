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

select.get('/totalbooking/:houseID', function (req, res) {
    db.query("SELECT COUNT(*) FROM " + tableprefix + "booking" + " WHERE status=2 AND ID_house=" + req.params.houseID, (err, result) => {
        if (err) throw(err);
        res.status(200).send({
            status: true,
            content: result[0]
        })
    });
});

select.get('/totalwaitingbooking/:houseID', function (req, res) {
    db.query("SELECT COUNT(*) FROM " + tableprefix + "booking" + " WHERE status=1 AND ID_house=" + req.params.houseID, (err, result) => {
        if (err) throw(err);
        res.status(200).send({
            status: true,
            content: result[0]
        })
    });
});

export default select;