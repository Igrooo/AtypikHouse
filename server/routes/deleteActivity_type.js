import connection from './../modules/dbConnection';
import jwt from 'jsonwebtoken';



let express = require('express');

let deleteActivity_type = express.Router();

   



deleteActivity_type.post('/deleteActivity_type', function (req, res) {

    
    //var userInfo = req.decodedToken.payload;
   // console.log(userInfo);
    
    var ID_Activity_type = JSON.stringify(req.body.ID_Activity_type);
 
   

    if(req.body.title ){

        connection.query("DELETE FROM ah_activities_types WHERE id=" +ID_Activity_type+"");
          res.status(200).send({
            message: 'Votre type activitée a été supprimée !' 
          })
        
    }else{
        res.status(500).send({
            status: false,
            message: "Vous devez saisir tous le champs obligatoires!"
        })
    }

});


export default deleteActivity_type;