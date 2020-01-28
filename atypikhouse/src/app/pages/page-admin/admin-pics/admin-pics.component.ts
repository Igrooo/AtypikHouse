import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { Pic } from "src/app/logic/Pic";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-pics',
  templateUrl: './admin-pics.component.html'
})
export class AdminPicsComponent implements OnInit {
  pics: [Pic];

  displayedColumns: string[] = ['ID', 'title', 'date', 'tools'];

  editOn:string;

  isReadonly:boolean = true;

  constructor(
    private data: DataService,
    private datePipe: DatePipe,) {

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

  edit(pic){
    this.data.save("pics", pic, result => {
      if (result) {
        
      }
    });
  }

  delete(picID){
    this.data.delete("pics", picID, result => {
      if (result) {
        let tr = $('#'+picID).parents('tr');
        tr.remove();
      }
    });
  }

  ngOnInit() {
    this.data.getList("pics", pics => {
      this.pics = pics;
    });
  }

}
