import { Injectable } from '@angular/core';
import { House} from "./logic/House";
import { PlaceLocation } from "./logic/PlaceLocation";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  public endpoint = "http://localhost:3000"; //API Server URL

  getList(callback) {
    //TODO: real web service
    /*
    const list = [
      new House("Tipi de Roger", "Chez Roger", new PlaceLocation("Lieu dit inconnu", "Plouguernével")),
      new House("Cabane suspendue", "Paradis", new PlaceLocation("Boulevard des amoureux", "Cité du Paradis")),
    ];
    callback(list);
    */
    this.http.get(`${this.endpoint}/houses`)
      .subscribe(response => {
      console.log(response);
      callback(response);
    });

  }

  save(house, callback) {
    //TODO: real web service
    if (house._id) {
      // It's an update
      this.http.put(`${this.endpoint}/houses/${house._id}`, house)
        .subscribe(response => {
          callback(true);
        });
    } else {
      // It's an insert
    }
    callback(true);
  }
}
