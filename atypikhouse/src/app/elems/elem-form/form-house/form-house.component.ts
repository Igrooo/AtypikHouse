import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';
import { FormControl, FormBuilder } from '@angular/forms';
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
  activities:Activity[]= [];
  activitiesList:string[] = [];
  activitiesTypes: [ActivityType];
  tags: [Tag];
  tag: Tag;

  ready:boolean = false;
  new:boolean;

  title:string;

  addTag0:boolean = false;
  addTag1:boolean = false;
  addTag0Complete:boolean = false;
  addTag1Complete:boolean = false;

  tags0 = new FormControl();
  tags1 = new FormControl();

  removedActivities = [0];

  removeActivity(ID){
    this.removedActivities.push(ID);
  }

  isRemoved(ID){
    return this.removedActivities.includes(ID);
  }

  inputTag(type,event){
    let value = event.target.value.trim();
    if(type == 0){
      this.addTag1 = false;
      if(value != ''){
        this.addTag0Complete = true;
      }
      else{
        this.addTag0Complete = false;
      }
    }
    if(type == 1){
      this.addTag0 = false;
      if(value != ''){
        this.addTag1Complete = true;
      }
      else{
        this.addTag1Complete = false;
      }
    }
    if(value != ''){
      this.tag = new Tag();
      this.tag.type = type.toString();
      this.tag.tag  = value;
    }
  }

  newTag(type){
    this.data.save(this.level,"tags", this.tag, this.token, insertID => {
      if(insertID){
        this.getTags();
        if(type == 0){
          let tags0values = this.tags0.value;
          tags0values.push(insertID);
          this.tags0.setValue(tags0values);
          this.addTag0 = false;
        }
        else{
          let tags1values = this.tags1.value;
          tags1values.push(insertID);
          this.tags1.setValue(tags1values);
          this.addTag1 = false;
        }
        this.udpateTags();
      }
    });
  }

  trackByTags(index: number, tag: Tag): number { return tag.ID; }

  getTags(){
    this.data.getList(this.level,"tags", this.token, tags => {
      this.tags = tags;
    });
  }

  udpateTags(){
    let tags0values = this.tags0.value;
    let tags1values = this.tags1.value;
    this.house.listID_tags = tags0values.concat(tags1values).join();
    console.log( this.house.listID_tags);
  }
  
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

              let tags = this.house.listID_tags.split(',');
              let selectedtags0:number[] = [];
              let selectedtags1:number[] = [];
              tags.forEach(tagID => {
                this.data.get(this.level,"tags", tagID, this.token, tag => {
                  if(tag){
                    this.tag = tag;
                    if(this.tag.type == 0){
                      selectedtags0.push(this.tag.ID);
                      this.tags0.setValue(selectedtags0);
                    }
                    if(this.tag.type == 1){
                      selectedtags1.push(this.tag.ID);
                      this.tags1.setValue(selectedtags1);
                    }
                  }
                });
              });
              if(this.house.listID_activities != ''){
                this.activitiesList = this.house.listID_activities.split(',');
                this.activitiesList.forEach(activityID => {
                  this.data.get(this.level,"activities", activityID, this.token, activity => {
                    if(activity){
                      this.activities.push(activity);
                    }
                  });
                });
              }
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

      this.data.getList(this.level,"activities_types", this.token, activitiesTypes => {
        this.activitiesTypes = activitiesTypes;
      });
      this.getTags();
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}