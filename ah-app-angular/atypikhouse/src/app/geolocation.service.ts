import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  requestLocation(callback) {
    // W3C Geolocation API
    navigator.geolocation.getCurrentPosition(
      position => {
        callback(position.coords);
      },
      error => {
        callback(null);
      }
    )
  }

  getMapLink(location) {
    let query = "";
    if (location.latitude) {
      query = location.latitude + "," + location.longitude;
    } else {
      query = `${location.adress}, ${location.city}`;
    }
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      return `https://maps.apple.com/?q=${query}`;
    } else {
      return `https://maps.google.com/?q=${query}`;
    }
    // Universal Link
    // <a href="https://maps.google.com/?q=String+String">
    // <a href="https://maps.google.com/?q=00.00,00.00">

  }
}
