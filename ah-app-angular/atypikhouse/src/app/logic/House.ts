import {PlaceLocation} from "./PlaceLocation";

export class House {

  // Properties
  //name: string;
  desc: string;
  //place: string;
  type: string;
  // _id debug only
  _id: string;
  //location: PlaceLocation;
  //rating: number;
  //notes: string;

  constructor(public name: string = "",
              public place: string = "",
              public location: PlaceLocation = null)
  {
    this.location = new PlaceLocation();
  }

}
