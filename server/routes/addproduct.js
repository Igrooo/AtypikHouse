import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let addProduct = express.Router();

   



 addProduct.post('/addProduct', function (req, res) {

    
    var userInfo = req.decodedToken.payload;
    console.log(userInfo);
    
    var title = JSON.stringify(req.body.title);
    var description = JSON.stringify(req.body.description);
    var address = JSON.stringify(req.body.address);
    var zip = JSON.stringify(req.body.zip);
    var city = JSON.stringify(req.body.city);
    var beds = JSON.stringify(req.body.beds);
    var price = JSON.stringify(req.body.price);
    var activite = JSON.stringify(req.body.activite);
    var tags = JSON.stringify(req.body.tags);
    var pics = JSON.stringify(req.body.pics);
    var user = JSON.stringify(userInfo.id);
    var category = JSON.stringify(req.body.category);

    if(req.body.title && req.body.description && req.body.address && req.body.zip && req.body.city && req.body.beds && req.body.price && req.body.activite && req.body.tags && req.body.pics && req.body.user && req.body.category){

        connection.query("INSERT INTO ah_houses (title, description, address, zipcode, city, nb_beds, price, listID_activities, listID_tags, listID_pics, ID_user, ID_category) VALUES (" +title+ ", " +description+ ", " +address+ ", "+zip+", "+city+", "+beds+", "+price+", "+activite+", "+tags+", "+pics+", "+user+", "+category+")");
          res.status(200).send({
            message: 'Votre annonce a été ajoutée avec succes !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default addProduct;