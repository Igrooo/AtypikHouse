let express = require('express');
const router = express.Router()
import connection from './../modules/dbConnection';





router.createBooking = function(req, res){
  
    

     var nb_persons = JSON.stringify(req.body.nb_persons);
     var date = JSON.stringify(req.body.date);
     var date_start = JSON.stringify(req.body.date_start);
     var date_end = JSON.stringify(req.body.date_end);
     var status = JSON.stringify(req.body.status);
     var ID_user = JSON.stringify(req.body.ID_user);
     var ID_house = JSON.stringify(req.body.ID_house);
 
    
    booking.save('./insertbooking',function(err, savedBooking){
        if(err)
            res.status(400).json(err)
        else if(!savedBooking)
            res.status(202).json("réservation non crée !")
        else
            res.status(201).json(savedBooking= connection.query("INSERT INTO ah_booking (nb_persons, date, date_start, date_end, status, ID_user, ID_house) VALUES ("+nb_persons+","+date+","+date_start+","+date_end+","+status+","+ID_user+","+ID_house+")"))
    })

    booking.update('./updatebooking',function(err, updateBooking){
        if(err)
            res.status(400).json(err)
        else if(!updateBooking)
            res.status(202).json("réservation non modifiée !")
        else
            res.status(201).json(updateBooking= connection.query("UPDATE ah_booking SET nb_persons="+nb_persons+", date="+date+", date_start="+date_start+", date_end="+date_end+", status="+status+", ID_user="+ID_user+", ID_house="+ID_house+""))
    })
    booking.delete('./deletebooking',function(err, deleteBooking){
        if(err)
            res.status(400).json(err)       
        else
            res.status(201).json(deleteBooking= connection.query("DELETE FROM ah_booking WHERE id="+ID_user+""))
    })

}


router.fetchBooking = function(req, res){
    console.log(req.params.user_id)
    Booking.find({ ID_user: req.params.ID_user }).exec(function(err, roomData){
        if(err)
            res.status(400).json(err)
        else if(!roomData)
            res.status(202).json("no data found")
        else
            res.status(200).json(roomData)
    })
}

module.exports = router