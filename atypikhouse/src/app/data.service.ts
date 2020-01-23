import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";

//const devmode:boolean = false;

//API Server URL 
const secure:string = ""; // s > activate https
const domain:string = "localhost";

// Production port  : 1407
// Development port : 3000 (server-backup with static .db file)
const port:string = "1407";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  public endpoint = "http"+secure+"://"+domain+":"+port;

  getLatLng(address, callback) {
    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&key=AIzaSyDJkhTc18Nb6YHAcn6czC5yFemUkLlODEw').subscribe(response =>{
      callback(response);
    });
  }

  get(route:string, ID:string, callback) {
    this.http.get(`${this.endpoint}/select/${route}/${ID}`)
      .subscribe(response =>{
        callback(response['content']);
      });
  }

  getList(route:string, callback) {
    this.http.get(`${this.endpoint}/select/${route}`)
      .subscribe(response => {
      callback(response['content']);
    });
  }

  getTotalBooking(houseID:string, callback) {
    this.http.get(`${this.endpoint}/totalbooking/${houseID}`)
      .subscribe(response => {
      callback(response['content']);
    });
  }

  getTotalWaitingBooking(houseID:string, callback) {
    this.http.get(`${this.endpoint}/totalwaitingbooking/${houseID}`)
      .subscribe(response => {
      callback(response['content']);
    });
  }

  login(user, callback) {
    this.http.post(`${this.endpoint}/login`, user)
    .subscribe(response => {
      callback(response['content']); //User ID
    });
  }

  save(route:string, elem, callback) {
    if (elem.ID) {
      // It's an update
      this.http.put(`${this.endpoint}/update/${route}/${elem.ID}`, elem)
        .subscribe(response => {
          callback(true);
        });
    } else {
      // It's an insert
      this.http.post(`${this.endpoint}/insert/${route}`, elem)
        .subscribe(response => {
          callback(response['content']); //insertID
        });
    }
    callback(true);
  }

  delete(route:string, ID: string, callback) {
    this.http.delete(`${this.endpoint}/delete/${route}/${ID}`)
    .subscribe(response => {
      callback(true);
    });
  }
}