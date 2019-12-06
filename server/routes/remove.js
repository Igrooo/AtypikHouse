import db from './../modules/db';

let express = require('express');
let remove  = express.Router();
let tableprefix = "ah_";

remove.delete('/delete/:tablename/:ID', function (req, res) {

    if(req.body.title ){
        db.query("DELETE FROM " + tableprefix + req.params.tablename + " WHERE ID=" + req.params.ID);
          res.status(200).send({
            message: 'DELETE ID ' + req.params.ID + ' from '+ req.params.tablename + ' done.'
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: 'DELETE error: ID ' + req.params.ID + ' from '+ req.params.tablename
        })
    }

});

export default remove;