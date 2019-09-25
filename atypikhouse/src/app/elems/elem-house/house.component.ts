import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { GeolocationService } from "src/app/geolocation.service";
//import { APIroutes, DataService } from "src/app/data.service";
import { DataService } from "src/app/data.service";
import { House } from "src/app/logic/House";
import { Icons } from "src/app/elems/elem-icon/icons-categories";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styles: []
})

export class HouseComponent implements OnInit {
  math = Math;

  house: House;

  icons = Icons;
  iconsSet      :string = 'travel';
  iconsSize     :string = 'banner';
  iconsColor    :string = '#9dc1bb';
  iconsBgFolder :string = 'houses';

  constructor(private route: ActivatedRoute,
              private geolocation: GeolocationService,
              private data: DataService
              ) { }

  routingSubscription: any;

  ngOnInit() {
    this.house = new House();

    this.routingSubscription =
      this.route.params.subscribe(params => {
        if(params["id"]) {
          this.data.get("showProduct", params["id"], response => {
            this.house = response;
          });
        }
      });
      /*
    this.geolocation.requestLocation(location => {
      if (location) {
        this.house.location.latitude = location.latitude;
        this.house.location.longitude = location.longitude;
      }
    });
     */

  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
