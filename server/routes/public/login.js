import db from '../../modules/db';
import generateToken from '../middleware/token';

let express = require('express');
let login = express.Router();

login.post('/login', (req, res) =>{

    if(req.body.email && req.body.password){

        db.query("SELECT * FROM ah_users WHERE `email` = " + "'" + req.body.email + "'", (err, result) => {
            if (err){
                res.status(500).send(err);
            } 
            if(result.length != 0){
                if(result[0].password === req.body.password){
                    const token = generateToken({ email: req.body.email });
                    res.status(200).send({
                        status: true,
                        content:  {
                            token : token,
                            user : result[0]
                        }
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
