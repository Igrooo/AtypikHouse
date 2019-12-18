import db from './../modules/db';

let express = require('express');
let remove  = express.Router();
let tableprefix = "ah_";

remove.delete('/delete/:tablename/:ID', function (req, res) {

    if(req.params.ID){
        db.query("DELETE FROM " + tableprefix + req.params.tablename + " WHERE ID=" + req.params.ID, (err, result) => {
            if (err) throw(err);
            res.status(200).send({
                status:true,
                message: 'DELETE ID ' + req.params.ID + ' from '+ req.params.tablename
              });
        });
        
    }else{
        res.status(500).send({
            status: false,
            message: 'DELETE error: need ID for '+ req.params.tablename
        })
    }

});

export default remove;