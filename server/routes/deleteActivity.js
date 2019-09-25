import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let deleteActivity = express.Router();

   



deleteActivity.post('/deleteActivity', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var ID_Activity = JSON.stringify(req.body.ID_Activity);
    
   

    if(req.body.title ){

        connection.query("DELETE FROM ah_activities WHERE id=" +ID_Activity+ "");
          res.status(200).send({
            message: 'Votre activitée a été supprimée !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default deleteActivity;