import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';
import { GeolocationService } from "src/app/geolocation.service";
//import { APIroutes, DataService } from "src/app/data.service";
import { DataService } from "src/app/data.service";
import { House } from "src/app/logic/House";
import { Category } from "src/app/logic/Category";
import { Activity } from "src/app/logic/Activity";
import { Tag } from "src/app/logic/Tag";

@Component({
  selector: 'app-form-house',
  templateUrl: './form-house.component.html'
})

export class FormHouseComponent implements OnInit {
  math = Math;

  house: House;

  categories: [Category];
  activities: [Activity];
  tags: [Tag];

  new:boolean;
  complete:boolean;

  title:string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private geolocation: GeolocationService,
              private data: DataService,
              private datePipe: DatePipe
              ) { }

  routingSubscription: any;

  submit(){
    console.log(this.house.ID);
    /*
    this.data.save("houses", this.house, insertID => {
      if (Number.isInteger(insertID)) {
        this.router.navigate(["/house", insertID]);
      }
    });
    */
  }

  ngOnInit() {
    this.routingSubscription =
      this.route.params.subscribe(params => {
        if(params["id"]) {
          this.data.get("houses", params["id"], house => {
            if (house) {
              this.new = false;
              this.house = house;
              this.title = 'Modifier "'+this.house.title+'"';
            }
          });
        }
        else{
          this.new = true;
          this.house   = new House();
          this.title = 'Publier une nouvelle annonce';
        }
      });

      this.data.getList("categories", categories => {
        this.categories = categories;
      });
      this.data.getList("activities", activities => {
        this.activities = activities;
      });
      this.data.getList("tags", tags => {
        this.tags = tags;
      });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}