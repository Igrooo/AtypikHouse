import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { House } from "../logic/House";
import {GeolocationService} from "../geolocation.service";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.less']
})
export class HouseComponent implements OnInit {

  house : House;
  types = ["Tipi", "Tiny house", "Caravan", "Yurt", "Hut", "Under the stars", "Bubble", "Cabin", "Arranged truck"];

  constructor(private route: ActivatedRoute,
              private  geolocation: GeolocationService) { }

  routingSubscription: any;

  ngOnInit() {
    this.house = new House();

    this.routingSubscription =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
      });

    this.geolocation.requestLocation(location => {
      if (location) {
        this.house.location.latitude = location.latitude;
        this.house.location.longitude = location.longitude;
      }
    });


  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
