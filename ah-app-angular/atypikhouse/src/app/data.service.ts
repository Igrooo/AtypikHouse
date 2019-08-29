import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  public endpoint = "http://localhost:1407"; //API Server URL

  get(elems:string, id: string, callback) {
    this.http.get(`${this.endpoint}/${elems}/${id}`)
      .subscribe(response =>{
        callback(response);
      });
  }

  getList(elems:string, callback) {
    this.http.get(`${this.endpoint}/${elems}`)
      .subscribe(response => {
      console.log(response);
      callback(response);
    });

  }

  save(elems:string, elem, callback) {
    if (elem.id) {
      // It's an update
      this.http.put(`${this.endpoint}/${elems}/${elem.id}`, elem)
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
