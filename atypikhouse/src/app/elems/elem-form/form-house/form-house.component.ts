import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';
import { DataService } from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { House } from "src/app/logic/House";
import { Category } from "src/app/logic/Category";
import { Activity } from "src/app/logic/Activity";
import { ActivityType } from "src/app/logic/ActivityType";
import { Tag } from "src/app/logic/Tag";

@Component({
  selector: 'app-form-house',
  templateUrl: './form-house.component.html'
})

export class FormHouseComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private data: DataService,
              private datePipe: DatePipe,
              private cookie: CookieService
              ) { }

  routingSubscription: any;
  
  level = 'user';
  token = this.cookie.get('token');

  math = Math;

  house: House;

  categories: [Category];
  activities: [Activity];
  activitiesTypes: [ActivityType];
  tags: [Tag];

  ready:boolean = false;
  new:boolean;

  title:string;

  addTag0:boolean = false;
  addTag1:boolean = false;
  addTag0Complete:boolean = false;
  addTag1Complete:boolean = false;

  submit(){
    if(this.new){
      console.log(this.house);
      this.data.save(this.level,"houses", this.house, this.token, insertID => {
        if (Number.isInteger(insertID)) {
          this.router.navigate(["/house", insertID]);
        }
      });
    }
    else{
      this.data.save(this.level,"houses", this.house, this.token, success => {
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
          this.data.get(this.level,"houses", params["id"], this.token, house => {
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
          this.house.ID_user = +this.cookie.get('userID');
          this.house.listID_activities = '0';
          this.house.listID_pics = '0';
          this.house.listID_tags = '0';
          this.title = 'Publier une nouvelle annonce';
          this.ready = true;
        }
      });

      this.data.getList(this.level,"categories", this.token, categories => {
        this.categories = categories;
      });
      this.data.getList(this.level,"activities", this.token, activities => {
        this.activities = activities;
      });
      this.data.getList(this.level,"activities_types", this.token, activitiesTypes => {
        this.activitiesTypes = activitiesTypes;
      });
      this.data.getList(this.level,"tags", this.token, tags => {
        this.tags = tags;
      });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}