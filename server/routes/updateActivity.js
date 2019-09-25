import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');
let updateActivity = express.Router();
   




updateActivity.post('/updateActivity', function (req, res) {

    var title = JSON.stringify(req.body.title);
    var description = JSON.stringify(req.body.description);
    var locationLat = JSON.stringify(req.body.locationLat);
    var locationLng = JSON.stringify(req.body.locationLng);
    var listID_tags = JSON.stringify(req.body.listID_tags);
    var ID_type = JSON.stringify(req.body.ID_type);
  
    
    //var userInfo = req.decodedToken.payload;
    //console.log(userInfo);
    
   

    if(req.body.title && req.body.description && req.body.address && req.body.zip && req.body.city && req.body.beds && req.body.price && req.body.activite && req.body.tags && req.body.pics && req.body.user && req.body.category){

        connection.query("UPDATE ah_houses SET title="+title+", description="+description+", address="+address+", zipcode="+zip+", city="+city+", nb_beds="+beds+", price="+price+")");
          res.status(200).send({
            message: 'Votre annonce a été modifiée avec succés !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default updateActivity;