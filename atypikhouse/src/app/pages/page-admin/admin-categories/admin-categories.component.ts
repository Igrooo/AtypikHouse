import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { Category } from "src/app/logic/Category";

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html'
})
export class AdminCategoriesComponent implements OnInit {
  
  constructor(private data: DataService,
              private cookie: CookieService
              ) { }
  
  level = 'admin';
  token = this.cookie.get('token');

  categories: [Category];

  displayedColumns: string[] = ['ID', 'title', 'description', 'tools'];

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

  edit(category){
    this.data.save(this.level,"categories", category, this.token, result => {
      if (result) {
        
      }
    });
  }

  delete(categoryID){
    this.data.delete(this.level,"categories", categoryID, this.token, result => {
      if (result) {
        let tr = $('#'+categoryID).parents('tr');
        tr.remove();
      }
    });
  }
  
  ngOnInit() {
    this.data.getList(this.level,"categories", this.token, categories => {
      this.categories = categories;
    });
  }
}
