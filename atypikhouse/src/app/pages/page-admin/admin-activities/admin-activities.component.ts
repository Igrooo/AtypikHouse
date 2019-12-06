import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { DataService} from "src/app/data.service";
import { Activity } from "src/app/logic/Activity";
import { ActivityType } from "src/app/logic/ActivityType";
import { Tag } from "src/app/logic/Tag";

@Component({
  selector: 'app-admin-activities',
  templateUrl: './admin-activities.component.html',
  styles: []
})
export class AdminActivitiesComponent implements OnInit {
  list: [Activity];
  typelist: [ActivityType];
  taglist: [Tag];
  selectedTags: string[];

  displayedColumns: string[] = ['ID', 'ID_type', 'title', 'description', 'locationLat', 'locationLng', 'listID_tags', 'tools'];

  editOn:string;

  isReadonly:boolean = true;

  tags = new FormControl();

  constructor(private data: DataService) {

  }

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

  edit(activity){
    this.data.save("activities", activity, result => {
      if (result) {
        
      }
    });
  }

  delete(activityID){
    this.data.delete("activities", activityID, result => {
      if (result) {
        let tr = $('#'+activityID).parents('tr');
        tr.remove();
      }
    });
  }
  
  ngOnInit() {
    this.data.getList("activities", list => {
      this.list = list;
    });
    this.data.getList("activities_types", typelist => {
      this.typelist = typelist;
    });
    this.data.getList("tags", taglist => {
      this.taglist = taglist;
      this.tags
    });
  }

}

