import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { House } from "../logic/House";
import { Category } from "../logic/Category";
import { GeolocationService } from "../geolocation.service";
import { DataService } from "../data.service";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.less']
})
export class HouseComponent implements OnInit {

  house: House;

  constructor(private route: ActivatedRoute,
              private geolocation: GeolocationService,
              private router: Router,
              private data: DataService
              ) { }

  routingSubscription: any;

  ngOnInit() {
    this.house = new House();

    this.routingSubscription =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
        if(params["id"]) {
          this.data.get("houses", params["id"], response => {
            this.house = response;
          });
        }
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
