const jwt = require('jsonwebtoken');
let express = require('express');
let auth = express.Router();

let secretkey = 'AJ2I-K4QTPNecAjd8AM43VaB57KhR';

auth.use(function (req, res, next) {
    const token = req.headers.token;
    if (token == null || token == 'public'){
        res.status(401).send({
            status: false,
            message: 'Vous devez être identifié pour accéder à ce contenu  !'
        })
        return;
    } 
    jwt.verify(token, secretkey, function (err, user) {
        if(err){
            if(err.name == 'TokenExpiredError'){
                console.log(err.message);
                console.log(err.expiredAt);
                res.status(200).send({
                    status: false,
                    content: 'expired'
                })
            }
            else{
                console.log(err);
                res.status(403).send({
                    status: false,
                    message: 'Vous devez être identifié pour accéder à ce contenu  !'
                })
            }
            return;
        }
        req.user = user;
        next()
    });
 });

export default auth;