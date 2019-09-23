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

  get(elems:string, id: string, callback) {
    this.http.get(`${this.endpoint}/${elems}/${id}`)
      .subscribe(response =>{
        //console.log('Get DATA : '+elems);
        callback(response['content']);
      });
  }

  getList(elems:string, callback) {
    this.http.get(`${this.endpoint}/${elems}`)
      .subscribe(response => {
      //console.log('Get DATA list : '+elems);
      callback(response['content']);
    });

  }

  save(elems:string, elem, callback) {
    if (elem.ID) {
      // It's an update
      this.http.put(`${this.endpoint}/${elems}/${elem.ID}`, elem)
        .subscribe(response => {
          callback(true);
        });
    } else {
      // It's an insert
      this.http.post(`${this.endpoint}/${elems}`, elem)
        .subscribe(response => {
          callback(true);
        });
    }
    callback(true);
  }
}
