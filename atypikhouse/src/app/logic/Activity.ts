import {PlaceLocation} from "./PlaceLocation";
export class Activity {
    ID: number;
    constructor(public title: string = "",
                public description: string = "", // description in db
                public location: PlaceLocation = null, // location.latitude & location.longitude , locationLat locationLng in db
                public listID_tags: string = "", // list of ID of tags
                public ID_type: number = 0 // Id of type
                )
    {
      this.location = new PlaceLocation();
    }
  
  }