import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';
import { GeolocationService } from "src/app/geolocation.service";
//import { APIroutes, DataService } from "src/app/data.service";
import { DataService } from "src/app/data.service";
import { House } from "src/app/logic/House";
import { Category } from "src/app/logic/Category";

@Component({
  selector: 'app-form-house',
  templateUrl: './form-house.component.html'
})

export class FormHouseComponent implements OnInit {
  math = Math;

  house: House;

  categories: [Category];

  complete:boolean;

  title:string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private geolocation: GeolocationService,
              private data: DataService,
              private datePipe: DatePipe
              ) { }

  routingSubscription: any;

  onChange(event) {
  }


  ngOnInit() {
    this.house   = new House();

    this.routingSubscription =
      this.route.params.subscribe(params => {
        if(params["id"]) {
          this.data.get("houses", params["id"], house => {
            if (house) {
              this.house = house;
              this.title = 'Modifier "'+this.house.title+'"';
            }
          });
        }
        else{
          this.title = 'Publier une nouvelle annonce';
        }
      });

      this.data.getList("categories", categories => {
        this.categories = categories;
      });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}