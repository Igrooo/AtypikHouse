export class House {
  ID: number;
  constructor(public status:            number = 0,  // status : 0=off 1=on , 2= pin in homepage (Mise en avant Admin)
              public title:             string = '',
              public description:       string = '',
              public address:           string = '',
              public zipcode:           number = 0,
              public city:              string = '',
              public nbBeds:            number = 1,
              public price:             number = 1,
              public tax:               number = 0,
              public listID_activities: string = '', // list of ID of activities
              public listID_tags:       string = '', // list of ID of tags
              public listID_pics:       string = '', // list of ID of pics
              public ID_category:       number = 1,  // Id of category
              public ID_user:           number = 1,  // Id of user
              public locationLat:       number = 0,      // not in db, get lat/lng location with address (geocoder)
              public locationLng:       number = 0
              ) 
  {

  }

}
