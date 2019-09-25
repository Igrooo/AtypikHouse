import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let addActivity = express.Router();

   



addActivity.post('/addActivity', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var title = JSON.stringify(req.body.title);
    var description = JSON.stringify(req.body.description);
    var locationLat = JSON.stringify(req.body.locationLat);
    var locationLng = JSON.stringify(req.body.locationLng);
    var listID_tags = JSON.stringify(req.body.listID_tags);
    var ID_type = JSON.stringify(req.body.ID_type);
   

    if(req.body.title && req.body.description && req.body.locationLat && req.body.locationLng && req.body.listID_tags && req.body.ID_type){

        connection.query("INSERT INTO ah_activities (title, description, locationLat, locationLng, listID_tags, ID_type) VALUES (" +title+ ", " +description+ ", " +locationLat+ ", "+locationLng+", "+listID_tags+", "+ID_type+")");
          res.status(200).send({
            message: 'Votre activité a été ajoutée avec succes !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default addActivity;