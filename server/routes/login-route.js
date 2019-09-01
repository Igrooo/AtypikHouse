
let jwt = require('jsonwebtoken');
let express = require('express');
let login = express.Router();
import connection from '../modules/dbConnection';



let secretkey = 'AJ2I';

login.post('/login', (req, res) =>{

    if(req.body.email && req.body.password){

        connection.query("SELECT * FROM utilisateurs WHERE `EMAIL` = " + "'" + req.body.email + "'", (err, result) => {

            if(result){
                if(result[0].EMAIL === req.body.email  && result[0].PASSWORD === req.body.password){
                    let token = jwt.sign({username: result[0].PRÉNOM, firstname: result[0].NOM, email: result[0].EMAIL}, secretkey);
                    res.status(200).send({
                        status: true,
                        content: token
                    });
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
