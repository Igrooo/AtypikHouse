import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { Activity } from "src/app/logic/Activity";
import { ActivityType } from "src/app/logic/ActivityType";
import { Tag } from "src/app/logic/Tag";

@Component({
  selector: 'app-admin-activities',
  templateUrl: './admin-activities.component.html'
})
export class AdminActivitiesComponent implements OnInit {
  
  constructor(private data: DataService,
    private cookieService: CookieService) { }

  level = 'admin';
  token = this.cookieService.get('token');

  activities: [Activity];
  activitiesTypes: [ActivityType];
  tags: [Tag];
  selectedTags: string[];

  displayedColumns: string[] = ['ID', 'ID_type', 'title', 'description', 'locationLat', 'locationLng', 'listID_tags', 'tools'];

  editOn:string = 'edit-off';

  isReadonly:boolean = true;

  tagsForm = new FormControl();

  focus(ID,focusedMode:string){
    let tr = $('#'+ID).parents('tr');
    tr.addClass('focused '+focusedMode);
    if(focusedMode == 'edit'){
      this.isReadonly = false;
    }
    this.editOn = 'edit-on';
  }
  cancel(ID, cancelMode:string){
    let tr = $('#'+ID).parents('tr');
    tr.removeClass('focused delete edit');
    this.isReadonly = true;
    if(cancelMode == 'edit'){
      tr.find('.ah-admin-input').each((i, input) => {
        let prevValue = $(input).data('prevValue');
        $(input).val(prevValue);
      });
    }
    this.editOn = 'edit-off';
  }

  update(ID, name:string, eventType:string, event){
    let input = $('#form-edit-'+ID+' [name="'+name+'"]');
    let value;
    if(eventType == 'input'){
      value = event.target.value;
    }
    else{
      value = event.value;
    }
    input.val(value);
  }

  edit(activity){
    this.data.save(this.level,"activities", activity, this.token, result => {
      if (result) {
        
      }
    });
  }

  delete(activityID){
    this.data.delete(this.level,"activities", activityID, this.token, result => {
      if (result) {
        let tr = $('#'+activityID).parents('tr');
        tr.remove();
      }
    });
  }
  
  ngOnInit() {
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

}

