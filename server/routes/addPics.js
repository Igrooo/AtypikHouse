import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let addPics = express.Router();

   



addPics.post('/addPics', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    
     var title = JSON.stringify(req.body.title);    
     var date = JSON.stringify(req.body.date);
     var ID_house = JSON.stringify(req.body.ID_house);
    
 
   

    if(req.body.title && req.body.date && req.body.ID_house){

        connection.query("INSERT INTO ah_pics (title, date, ID_house) VALUES (" +title+ ", " +date+ ", "+ID_house+")");
          res.title(200).send({
            message: 'Votre photo a été ajoutée avec succes !' 
          })
        
    }else{
        res.title(500).send({
            title: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default addPics;