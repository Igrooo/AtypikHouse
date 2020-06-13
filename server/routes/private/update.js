import db from '../../modules/db';

let express     = require('express');
let update      = express.Router();
let tableprefix = 'ah_';

let complete    = false;
let sets        = '';

update.put('/:level/update/:tablename/:ID', function (req, res) {

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
                sets        = 'title='+title+', description='+description+', locationLat='+locationLat+', locationLng='+locationLng+', listID_tags='+listID_tags+', ID_type='+ID_type;
            }
            break;
        case 'activities_types':
            if(req.body.title){
                complete        = true;
                let title       = JSON.stringify(req.body.title);
                sets        = 'title='+title;
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
                sets        = 'status='+status+', nbPersons='+nbPersons+', date='+date+', dateStart='+dateStart+', dateEnd='+dateEnd+', ID_user='+ID_user+', ID_house='+ID_house;
            }
            break;
        case 'categories':
            if(req.body.title && req.body.description){
                complete        = true;
                let title       = JSON.stringify(req.body.title);
                let description = JSON.stringify(req.body.description);
                sets        = 'title='+title+', description='+description;
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
                sets        = 'comment='+comment+', rating='+rating+', date='+date+', ID_user='+ID_user+', ID_booking='+ID_booking;
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
                sets              = 'title='+title+', description='+description+', address='+address+', zipcode='+zipcode+', city='+city+', status='+status+', nbBeds='+nbBeds+', price='+price+', tax='+tax+', listID_activities='+listID_activities+', listID_tags='+listID_tags+', listID_pics='+listID_pics+', ID_user='+ID_user+', ID_category='+ID_category;
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
                sets        = 'status='+status+', amount='+amount+', date='+date+', ID_user='+ID_user+', ID_booking='+ID_booking;
            }
            break;
        case 'pics':
            if(req.body.title && req.body.date && req.body.ID_house){
                complete        = true;
                let title       = JSON.stringify(req.body.title);    
                let date        = JSON.stringify(req.body.date);
                let ID_house    = JSON.stringify(req.body.ID_house);
                sets        = 'title='+title+', date='+date+', ID_house='+ID_house;
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
                sets        = 'date='+date+', message='+message+', ID_house='+ID_house+', ID_userForm='+ID_userForm+', ID_userTo='+ID_userTo;
            }
            break;
        case 'tags':
            if(req.body.type && req.body.tag){
                complete = true;
                let type        = JSON.stringify(req.body.type);    
                let tag         = JSON.stringify(req.body.tag);
                sets        = 'type='+type+', tag='+tag;
            }
            break;
        case 'users':
            if(req.body.type && req.body.email && req.body.password && req.body.name && req.body.firstname && req.body.address && req.body.city && req.body.siret){
                complete = true;
                let type      = JSON.stringify(req.body.type);
                let email     = JSON.stringify(req.body.email);
                let password  = JSON.stringify(req.body.password);
                let name      = JSON.stringify(req.body.name);
                let firstname = JSON.stringify(req.body.firstname);
                let address   = JSON.stringify(req.body.address);
                let zipcode   = JSON.stringify(req.body.zipcode);
                let city      = JSON.stringify(req.body.city);
                let siret     = JSON.stringify(req.body.siret);
                sets        = 'type='+type+', email='+email+', password='+password+', name='+name+', firstname='+firstname+', address='+address+', zipcode='+zipcode+', city='+city+', siret='+siret;
            }
            break;
    }

    if(complete){
        db.query('UPDATE ' + tableprefix + req.params.tablename + ' SET ' + sets + ' WHERE ID=' + req.params.ID, (err, result) => {
            if (err) throw(err);
            res.status(200).send({
                status: true,
                message: 'Update done: ID ' + req.params.ID + ' of ' + req.params.tablename
              });
        });

    }else{
        res.status(500).send({
            status: false,
            message: 'Update error: data missing for ID ' + req.params.ID + ' of ' + req.params.tablename
        })
    }
});

export default update;