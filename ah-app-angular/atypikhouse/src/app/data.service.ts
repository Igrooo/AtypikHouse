import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getList(callback) {
    //TODO: real web service
    const list = [
      new House("Tipi de Roger", "Chez Roger", new PlaceLocation("Lieu dit inconnu", "Plouguernével")),
      new House("Cabane suspendue de l'amour", "Paradis", new PlaceLocation("Boulevard des amours", "Cité du Paradis")),
    ];
    callback(list);
  }

  save(house, callback) {
    //TODO: real web service
    callback(true);
  }
}
