import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { Pic } from "src/app/logic/Pic";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-pics',
  templateUrl: './admin-pics.component.html'
})
export class AdminPicsComponent implements OnInit {
  
  constructor(private data: DataService,
              private datePipe: DatePipe,
              private cookie: CookieService
              ) {}
  
  level = 'admin';
  token = this.cookie.get('token');
  
  pics: [Pic];

  displayedColumns: string[] = ['ID', 'title', 'date', 'tools'];

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

  edit(pic){
    this.data.save(this.level,"pics", pic, this.token, result => {
      if (result) {
        
      }
    });
  }

  delete(picID){
    this.data.delete(this.level,"pics", picID, this.token, result => {
      if (result) {
        let tr = $('#'+picID).parents('tr');
        tr.remove();
      }
    });
  }

  ngOnInit() {
    this.data.getList(this.level,"pics", this.token, pics => {
      this.pics = pics;
    });
  }

}
