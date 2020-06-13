import db from '../../modules/db';

let express = require('express');
let privateSelect = express.Router();
let tableprefix = "ah_";

let forbidden = false;

privateSelect.get('/:level/select/:tablename', function (req, res) {

    if(req.params.level == 'user' && req.params.tablename == 'users'){
        forbidden = true;
    }

    if(forbidden){
        res.status(500).send({
            status: false,
            message: 'FORBIDDEN for user'
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

privateSelect.get('/:level/select/:tablename/:ID', function (req, res) {

    if(forbidden){
        res.status(500).send({
            status: false,
            message: 'FORBIDDEN for user'
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

export default privateSelect;