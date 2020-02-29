import db from '../../modules/db';

let express = require('express');
let remove  = express.Router();
let tableprefix = "ah_";

let forbidden = false;

remove.delete('/:level/delete/:tablename/:ID', function (req, res) {
    
    if(req.params.ID){
        if(req.params.level == 'user'){
            switch (req.params.tablename){
                // Forbidden remove for user
                //case 'houses':           forbidden = true; break;
                //case 'pics':             forbidden = true; break;
                //case 'tags':             forbidden = true; break;
                //case 'posts':            forbidden = true; break;
                case 'booking':          forbidden = true; break;
                case 'activities':       forbidden = true; break;
                case 'activities_types': forbidden = true; break;
                case 'categories':       forbidden = true; break;
                case 'comments':         forbidden = true; break;
                case 'users':            forbidden = true; break;
                case 'payments':         forbidden = true; break;
            }
        }

        if(forbidden){
            res.status(500).send({
                status: false,
                message: 'FORBIDDEN for user'
            })
        }
        else{
            db.query("DELETE FROM " + tableprefix + req.params.tablename + " WHERE ID=" + req.params.ID, (err, result) => {
                if (err) throw(err);
                res.status(200).send({
                    status:true,
                    message: 'DELETE ID ' + req.params.ID + ' from '+ req.params.tablename
                });
            });
        }
    }else{
        res.status(500).send({
            status: false,
            message: 'DELETE error: need ID for '+ req.params.tablename
        })
    }

});

export default remove;