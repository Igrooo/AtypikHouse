import {PlaceLocation} from "./PlaceLocation";

export class House {

  constructor(public name: string = "", // title in db
              public desc: string = "", // description in db
              public type: number = 0, // Id of category
              public place: string = "", // address in db
              public zipcode: number = 0,
              public city: string = "",
              public status: number = 0, // status : 0=off 1=on 2=? 3=?
              public nbBeds: number = 1,
              public price: number = 1,
              public tax: number = 0,
              public activities: string = "", // list of ID of activities
              public tags: string = "", // list of ID of tags
              public pics: string = "", // list of ID of pics
              public user: number = 0, // Id of user
              public location: PlaceLocation = null)
  {
    this.location = new PlaceLocation();
  }

}
