import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { ActivityType } from "src/app/logic/ActivityType";

@Component({
  selector: 'app-admin-activities-type',
  templateUrl: './admin-activities-type.component.html'
})
export class AdminActivitiesTypeComponent implements OnInit {
  
  constructor(private data: DataService,
              private cookieService: CookieService
              ) { }

  level = 'admin';
  token = this.cookieService.get('token');

  activitiesTypes: [ActivityType];

  displayedColumns: string[] = ['ID', 'title', 'tools'];

  editOn:string;

  isReadonly:boolean = true;

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
    this.editOn = '';
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

  edit(activityType){
    this.data.save(this.level,"activities_types", activityType, this.token, result => {
      console.log(activityType);
      if (result) {
        
      }
    });
  }

  delete(activityTypeID){
    this.data.delete(this.level,"activities_types", activityTypeID, this.token, result => {
      if (result) {
        let tr = $('#'+activityTypeID).parents('tr');
        tr.remove();
      }
    });
  }
  
  ngOnInit() {
    this.data.getList(this.level,"activities_types", this.token, activitiesTypes => {
      this.activitiesTypes = activitiesTypes;
    });
  }

}
