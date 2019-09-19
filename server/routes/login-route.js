
import jwt from 'jsonwebtoken';
let express = require('express');
let login = express.Router();
import connection from '../modules/dbConnection';



let secretkey = 'AJ2I';

login.post('/login', (req, res) =>{

    if(req.body.email && req.body.password){

        connection.query("SELECT * FROM ah_users WHERE `email` = " + "'" + req.body.email + "'", (err, result) => {

            if(result.length != 0){
                if(result[0].password === req.body.password){
                    let token = jwt.sign({firstname: result[0].firstname, lastname: result[0].name, email: result[0].email, id: result[0].ID}, secretkey);
                    res.status(200).send({
                        status: true,
                        content: token
                    });
                }else{
                    res.status(500).send({
                        status: false,
                        message: 'Mot de passe ou email invalide !'
                    })
                }  
            }else{
                res.status(500).send({
                    status: false,
                    message: 'Mot de passe ou email invalide !'
                })
            }            
        });
     
    }else{
        res.status(500).send({
            status: false,
            message: 'Vous devez remplir tout les champs !'
        });
    }

});

export default login;
