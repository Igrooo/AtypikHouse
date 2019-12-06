import db from '../modules/db';
import jwt from 'jsonwebtoken';

let express = require('express');
let login = express.Router();

let secretkey = 'AJ2I';

login.post('/login', (req, res) =>{

    if(req.body.email && req.body.password){

        db.query("SELECT * FROM ah_users WHERE `email` = " + "'" + req.body.email + "'", (err, result) => {

            if(result.length != 0){
                if(result[0].password === req.body.password){
                    let token = jwt.sign({firstname: result[0].firstname, lastname: result[0].name, email: result[0].email, id: result[0].ID}, secretkey);
                    res.status(200).send({
                        status: true,
                        message : token, 
                        content: result[0],
                    });
                }else{
                    res.status(500).send({
                        status: false,
                        message: 'E-mail or password wrong.'
                    })
                }  
            }else{
                res.status(500).send({
                    status: false,
                    message: 'E-mail or password wrong.'
                })
            }            
        });
     
    }else{
        res.status(500).send({
            status: false,
            message: 'Need e-mail and password.'
        });
    }

});

export default login;
