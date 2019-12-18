import db from '../modules/db';

let express     = require('express');
let insert      = express.Router();
let tableprefix = 'ah_';

let complete    = false;

let tablefields = '';
let values      = '';

insert.post('/insert/:tablename', function (req, res) {

    //let userInfo = req.decodedToken.payload;
    //console.log(userInfo);

    switch (req.params.tablename){
        case 'activities':
            if(req.body.title && req.body.description && req.body.locationLat && req.body.locationLng && req.body.listID_tags && req.body.ID_type){
                complete        = true;
                let title       = JSON.stringify(req.body.title);
                let description = JSON.stringify(req.body.description);
                let locationLat = JSON.stringify(req.body.locationLat);
                let locationLng = JSON.stringify(req.body.locationLng);
                let listID_tags = JSON.stringify(req.body.listID_tags);
                let ID_type     = JSON.stringify(req.body.ID_type);
                tablefields = 'title, description, locationLat, locationLng, listID_tags, ID_type';
                values      = title+', '+description+', '+locationLat+', '+locationLng+', '+listID_tags+', '+ID_type;
            }
            break;
        case 'activities_types':
            if(req.body.title){
                complete        = true;
                let title       = JSON.stringify(req.body.title);
                tablefields = 'title';
                values      = title;
            }
            break;
        case 'booking':
            if(req.body.nbPersons && req.body.date && req.body.dateStart && req.body.dateEnd && req.body.status && req.body.ID_user && req.body.ID_house){
                complete        = true;
                let status      = JSON.stringify(req.body.status);
                let nbPersons   = JSON.stringify(req.body.nbPersons);
                let date        = JSON.stringify(req.body.date);
                let dateStart   = JSON.stringify(req.body.dateStart);
                let dateEnd     = JSON.stringify(req.body.dateEnd);
                let ID_user     = JSON.stringify(req.body.ID_user);
                let ID_house    = JSON.stringify(req.body.ID_house);
                tablefields = 'status, nbPersons, date, dateStart, dateEnd, ID_user, ID_house';
                values      = status+', '+nbPersons+', '+date+', '+dateStart+', '+dateEnd+', '+ID_user+', '+ID_house;
            }
            break;
        case 'categories':
            if(req.body.title && req.body.description){
                complete        = true;
                let title       = JSON.stringify(req.body.title);
                let description = JSON.stringify(req.body.description);
                tablefields = 'title, description';
                values      = title+', '+description;
            }
            break;
        case 'comments':
            if(req.body.comment && req.body.rating && req.body.date && req.body.ID_user && req.body.ID_booking){
                complete        = true;
                let comment     = JSON.stringify(req.body.comment);
                let rating      = JSON.stringify(req.body.rating);
                let date        = JSON.stringify(req.body.date);
                let ID_user     = JSON.stringify(req.body.ID_user);
                let ID_booking  = JSON.stringify(req.body.ID_booking);
                tablefields = 'comment, rating, date, ID_user, ID_booking';
                values      = comment+', '+rating+', '+date+', '+ID_user+', '+ID_booking;
            }
            break;
        case 'houses':
            if(req.body.title && req.body.description && req.body.address && req.body.zipcode && req.body.city && req.body.status && req.body.nbBeds && req.body.price && req.body.tax && req.body.listID_activities && req.body.listID_tags && req.body.listID_pics && req.body.ID_user && req.body.ID_category){
                complete              = true;
                let title             = JSON.stringify(req.body.title);
                let description       = JSON.stringify(req.body.description);
                let address           = JSON.stringify(req.body.address);
                let zipcode           = JSON.stringify(req.body.zipcode);
                let city              = JSON.stringify(req.body.city);
                let status            = JSON.stringify(req.body.status);
                let nbBeds            = JSON.stringify(req.body.nbBeds);
                let price             = JSON.stringify(req.body.price);
                let tax               = JSON.stringify(req.body.tax);
                let listID_activities = JSON.stringify(req.body.listID_activities);
                let listID_tags       = JSON.stringify(req.body.listID_tags);
                let listID_pics       = JSON.stringify(req.body.listID_pics);
                let ID_user           = JSON.stringify(req.body.ID_user);
                let ID_category       = JSON.stringify(req.body.ID_category);
                tablefields       = 'title, description, address, zipcode, city, status, nbBeds, price, tax, listID_activities, listID_tags, listID_pics, ID_user, ID_category';
                values            = title+', '+description+', '+address+', '+zipcode+', '+city+', '+status+', '+nbBeds+', '+price+', '+tax+', '+listID_activities+', '+listID_tags+', '+listID_pics+', '+ID_user+', '+ID_category;
            }
            break;
        case 'payments':
            if(req.body.status && req.body.amount && req.body.date && req.body.ID_user && req.body.ID_booking){
                complete        = true;
                let status      = JSON.stringify(req.body.status);
                let amount      = JSON.stringify(req.body.amount);
                let date        = JSON.stringify(req.body.date);
                let ID_user     = JSON.stringify(req.body.ID_user);
                let ID_booking  = JSON.stringify(req.body.ID_booking);
                tablefields = 'status, amount, date, ID_user, ID_booking';
                values      = status+', '+amount+', '+date+', '+ID_user+', '+ID_booking;
            }
            break;
        case 'pics':
            if(req.body.title && req.body.date && req.body.ID_house){
                complete        = true;
                let title       = JSON.stringify(req.body.title);    
                let date        = JSON.stringify(req.body.date);
                let ID_house    = JSON.stringify(req.body.ID_house);
                tablefields = 'title, date, ID_house';
                values      = title+', '+date+', '+ID_house;
            }
            break;
        case 'posts':
            if(req.body.date && req.body.message && req.body.ID_house && req.body.ID_userForm && req.body.ID_userTo){
                complete = true;
                let date        = JSON.stringify(req.body.date);
                let message     = JSON.stringify(req.body.message);   
                let ID_house    = JSON.stringify(req.body.ID_house);
                let ID_userForm = JSON.stringify(req.body.ID_userForm);
                let ID_userTo   = JSON.stringify(req.body.ID_userTo);
                tablefields = 'date, message, ID_house, ID_userForm, ID_userTo';
                values      = date+', '+message+', '+ID_house+', '+ID_userForm+', '+ID_userTo;
            }
            break;
        case 'tags':
            if(req.body.type && req.body.tag){
                complete = true;
                let type        = JSON.stringify(req.body.type);    
                let tag         = JSON.stringify(req.body.tag);
                tablefields = 'type, tag';
                values      = type+', '+tag;
            }
            break;
        case 'users':
            if(req.body.type && req.body.name && req.body.prenom && req.body.prenom && req.body.zipcode && req.body.city && req.body.email && req.body.password){
                complete = true;
                let type        = JSON.stringify(req.body.type);
                let name        = JSON.stringify(req.body.name);
                let firstname   = JSON.stringify(req.body.prenom);
                let address     = JSON.stringify(req.body.prenom);
                let zipcode     = JSON.stringify(req.body.zipcode);
                let city        = JSON.stringify(req.body.city);
                let email       = JSON.stringify(req.body.email);
                let password    = JSON.stringify(req.body.password);
                tablefields = 'type, name, firstname, address, zipcode, city, email, password';
                values      = type+', '+name+', '+firstname+', '+address+', '+zipcode+', '+city+', '+email+', '+password;
            }
            break;
    }

    if(complete){
        db.query('INSERT INTO ' + tableprefix + req.params.tablename + ' (' + tablefields + ') VALUES (' + values + ')', (err, result) => {
            if (err) throw(err);
            res.status(200).send({
                message: 'INSERT new data into ' + req.params.tablename + ', ID: '+ result.insertId,
                content: result.insertId
            })
        });
    
    }else{
        res.status(500).send({
            status: false,
            message: 'INSERT error: data missing for ' + req.params.tablename
        })
    }
});

export default insert;