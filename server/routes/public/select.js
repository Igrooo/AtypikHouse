import db from '../../modules/db';

let express = require('express');
let select = express.Router();
let tableprefix = "ah_";

let forbidden = false;

select.get('/public/select/:tablename', function (req, res) {

    switch (req.params.tablename){
        // Forbidden data for public
        //case 'activities':       forbidden = true; break;
        //case 'activities_types': forbidden = true; break;
        //case 'categories':       forbidden = true; break;
        //case 'comments':         forbidden = true; break;
        //case 'houses':           forbidden = true; break;
        //case 'pics':             forbidden = true; break;
        //case 'tags':             forbidden = true; break;
        case 'users':            forbidden = true; break;
        case 'booking':          forbidden = true; break;
        case 'payments':         forbidden = true; break;
        case 'posts':            forbidden = true; break;
    }

    if(forbidden){
        res.status(500).send({
            status: false,
            message: 'FORBIDDEN for public'
        })
    }
    else{
        db.query("SELECT * FROM " + tableprefix + req.params.tablename, (err, result) => {
            if (err) throw(err);
            res.status(200).send({
                status: true,
                content: result
            })
        });
    }


});

select.get('/public/select/:tablename/:ID', function (req, res) {
    switch (req.params.tablename){
        // Forbidden data for public
        //case 'activities':       forbidden = true; break;
        //case 'activities_types': forbidden = true; break;
        //case 'categories':       forbidden = true; break;
        //case 'comments':         forbidden = true; break;
        //case 'houses':           forbidden = true; break;
        //case 'pics':             forbidden = true; break;
        //case 'tags':             forbidden = true; break;
        case 'users':            forbidden = true; break;
        case 'booking':          forbidden = true; break;
        case 'payments':         forbidden = true; break;
        case 'posts':            forbidden = true; break;
    }

    if(forbidden){
        res.status(500).send({
            status: false,
            message: 'FORBIDDEN for public'
        })
    }
    else{
        db.query("SELECT * FROM " + tableprefix + req.params.tablename + " WHERE ID=" + req.params.ID, (err, result) => {
            if (err) throw(err);
            res.status(200).send({
                status: true,
                content: result[0]
            })
        });
    }
});

export default select;