import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { House } from "../../logic/House";
import { Category } from "../../logic/Category";
import { GeolocationService } from "../../geolocation.service";
import { DataService } from "../../data.service";

@Component({
  selector: 'app-house',
  templateUrl: './form-house.component.html',
  styleUrls: ['./form-house.component.less']
})
export class FormHouseComponent implements OnInit {

  house: House;
  types = Category;

  constructor(private route: ActivatedRoute,
              private geolocation: GeolocationService,
              private router: Router,
              private data: DataService
              ) { }


  routingSubscription: any;

  cancel() {
    this.router.navigate(["/house", this.house._id]);
  }

  save() {
    this.data.save("houses", this.house, result => {
      if (result) {
        this.router.navigate(["/house", this.house._id]);
      }
    });
  }

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