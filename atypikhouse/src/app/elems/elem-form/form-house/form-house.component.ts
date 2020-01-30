import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';
import { GeolocationService } from "src/app/geolocation.service";
//import { APIroutes, DataService } from "src/app/data.service";
import { DataService } from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
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

  ready:boolean = false;
  new:boolean;

  title:string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private geolocation: GeolocationService,
              private data: DataService,
              private cookieService: CookieService,
              private datePipe: DatePipe
              ) { }

  routingSubscription: any;

  submit(){
    if(this.new){
      console.log(this.house);
      this.data.save("houses", this.house, insertID => {
        if (Number.isInteger(insertID)) {
          this.router.navigate(["/house", insertID]);
        }
      });
    }
    else{
      this.data.save("houses", this.house, success => {
        if (success) {
          this.router.navigate(["/house", this.house.ID]);
        }
      });
    }
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
              this.ready = true;
            }
          });
        }
        else{
          this.new = true;
          this.house   = new House();
          this.house.status = 1;
          this.house.ID_user = +this.cookieService.get('userID');
          this.house.listID_activities = '0';
          this.house.listID_pics = '0';
          this.house.listID_tags = '0';
          this.title = 'Publier une nouvelle annonce';
          this.ready = true;
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