import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { House } from "../logic/House";
import { GeolocationService } from "../geolocation.service";
import { DataService } from "../data.service";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.less']
})
export class HouseComponent implements OnInit {

  house: House;
  types = ["Tipi", "Tiny house", "Caravan", "Yurt", "Hut", "Under the stars", "Bubble", "Cabin", "Arranged truck"];

  constructor(private route: ActivatedRoute,
              private geolocation: GeolocationService,
              private router: Router,
              private data: DataService
              ) { }


  routingSubscription: any;

  cancel() {
    this.router.navigate(["/"]);
  }

  save() {
    this.data.save( this.house, result => {
      if (result) {
        this.router.navigate(["/"]);
      }
    });
  }

  ngOnInit() {
    this.house = new House();

    this.routingSubscription =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
        if(params["id"]) {
          this.data.get(params["id"], response => {
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
