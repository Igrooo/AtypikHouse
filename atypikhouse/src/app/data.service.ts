import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";

//const devmode:boolean = false;

//API Server URL 
const secure:string = ""; // s > activate https
const domain:string = "37.59.61.46";

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

  login(user, callback) {
    this.http.post(`${this.endpoint}/login`, user)
    .subscribe(response => {
      callback(response['content']); //Token & User ID
    });
  }

  signup(user, callback) {
    this.http.post(`${this.endpoint}/signup`, user)
    .subscribe(response => {
      callback(response['content']); //New User ID
    });
  }

  ping(level:string, token, callback) {
    this.http.get(`${this.endpoint}/${level}/ping`, {headers: new HttpHeaders().set('token', token)})
    .subscribe(response =>{
      if(response['content'] == 'expired'){
        callback(false);
      }else{
        callback(true);
      }
    });
  }

  get(level:string, route:string, ID:string, token, callback) {
    this.http.get(`${this.endpoint}/${level}/select/${route}/${ID}`, {headers: new HttpHeaders().set('token', token)})
      .subscribe(response =>{
        if(response['content'] == 'expired'){
          callback(false);
        }else{
          callback(response['content']);
        }
      });
  }

  getList(level:string, route:string, token, callback) {
    this.http.get(`${this.endpoint}/${level}/select/${route}`, {headers: new HttpHeaders().set('token', token)})
      .subscribe(response => {
        if(response['content'] == 'expired'){
          callback(false);
        }else{
          callback(response['content']);
        }
    });
  }

  save(level:string, route:string, elem, token, callback) {
    if (elem.ID) {
      // It's an update
      this.http.put(`${this.endpoint}/${level}/update/${route}/${elem.ID}`, elem, {headers: new HttpHeaders().set('token', token)})
        .subscribe(response => {
          if(response['content'] == 'expired'){
            callback(false);
          }else{
            callback(true);
          }
        });
    } else {
      // It's an insert
      this.http.post(`${this.endpoint}/${level}/insert/${route}`, elem, {headers: new HttpHeaders().set('token', token)})
        .subscribe(response => {
          if(response['content'] == 'expired'){
            callback(false);
          }else{
            callback(response['content']); //insertID
          }
        });
    }
  }

  delete(level:string, route:string, ID: string, token, callback) {
    this.http.delete(`${this.endpoint}/${level}/delete/${route}/${ID}`, {headers: new HttpHeaders().set('token', token)})
    .subscribe(response => {
      if(response['content'] == 'expired'){
        callback(false);
      }else{
        callback(true);
      }
    });
  }
}
