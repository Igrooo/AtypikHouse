import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { ActivityType } from "src/app/logic/ActivityType";

@Component({
  selector: 'app-admin-activities-type',
  templateUrl: './admin-activities-type.component.html',
  styles: []
})
export class AdminActivitiesTypeComponent implements OnInit {
  list: [ActivityType];

  displayedColumns: string[] = ['ID', 'title', 'tools'];

  editOn:string;

  isReadonly:boolean = true;

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

  edit(activity_type){
    this.data.save("activities_types", activity_type, result => {
      console.log(activity_type);
      if (result) {
        
      }
    });
  }

  delete(activity_typeID){
    this.data.delete("activities_types", activity_typeID, result => {
      if (result) {
        let tr = $('#'+activity_typeID).parents('tr');
        tr.remove();
      }
    });
  }
  
  ngOnInit() {
    this.data.getList("activities_types", list => {
      this.list = list;
    });
  }

}
