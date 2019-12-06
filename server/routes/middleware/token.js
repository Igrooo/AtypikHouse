import jwt from 'jsonwebtoken';
let express = require('express');
let auth = express.Router();

let secretkey = 'AJ2I';

auth.use(function (req, res, next) {
    let token = req.headers.token;

    let decoded_token = jwt.verify(token, secretkey, function (err) {
        if(err){
            res.status(500).send({
                status: false,
                message: 'Vous devez être identifié pour accéder à ce contenu  !'
            })
            return;
        }else{
            let decoded = jwt.decode(token, {
                complete: true 
            });
        
         let firstnameInToken = decoded.payload.firstname;
         let lastnameInToken = decoded.payload.lastname;
         let IdInToken = decoded.payload.Id;
         let emailInToken = decoded.payload.email;

         console.log(firstnameInToken, lastnameInToken, emailInToken, IdInToken);

        
            req.decodedToken = decoded;
            // req.token = token;
            // req.usernameInToken = usernameInToken
            
        
            // let verifyUSer = users.includes(usernameInToken);

            next();
        }
    });
 });

export default auth;