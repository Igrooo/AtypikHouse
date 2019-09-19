import jwt from 'jsonwebtoken';
let express = require('express');
let auth = express.Router();

let secretkey = 'AJ2I';

auth.use(function (req, res, next) {
    var token = req.headers.token;

    var decoded_token = jwt.verify(token, secretkey, function (err) {
        if(err){
            res.status(500).send({
                status: false,
                message: 'Vous devez être identifié pour accéder à ce contenu  !'
            })
            return;
        }else{
            var decoded = jwt.decode(token, {
                complete: true 
            });
        
         var firstnameInToken = decoded.payload.firstname;
         var lastnameInToken = decoded.payload.lastname;
         var IdInToken = decoded.payload.Id;
         var emailInToken = decoded.payload.email;

         console.log(firstnameInToken, lastnameInToken, emailInToken, IdInToken);

        
            req.decodedToken = decoded;
            // req.token = token;
            // req.usernameInToken = usernameInToken
            
        
            // var verifyUSer = users.includes(usernameInToken);

            next();
        }
    });
 });

export default auth;