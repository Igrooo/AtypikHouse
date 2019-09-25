import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let updatePics = express.Router();

   



updatePics.post('/updatePics', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    
     var title = JSON.stringify(req.body.title);    
     var date = JSON.stringify(req.body.date);
     var ID_house = JSON.stringify(req.body.ID_house);
    
 
   

    if(req.body.title && req.body.date && req.body.ID_house){

        connection.query("UPDATE ah_pics SET title=" +title+ ", date=" +date+ ", ID_house="+ID_house+"");
          res.title(200).send({
            message: 'Votre photo a été modifiée avec succes !' 
          })
        
    }else{
        res.title(500).send({
            title: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default updatePics;