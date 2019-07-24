import { Injectable } from '@angular/core';
import { House} from "./logic/House";
import { PlaceLocation } from "./logic/PlaceLocation";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor() { }

  getList(callback) {
    //TODO: real web service
    const list = [
      new House("Tipi de Roger", "Chez Roger", new PlaceLocation("Lieu dit inconnu", "Plouguernével")),
      new House("Cabane suspendue", "Paradis", new PlaceLocation("Boulevard des amoureux", "Cité du Paradis")),
    ];
    callback(list);
  }

  save(house, callback) {
    //TODO: real web service
    callback(true);
  }
}
