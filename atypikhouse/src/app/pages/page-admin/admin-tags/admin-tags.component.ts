import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { Tag } from "src/app/logic/Tag";

@Component({
  selector: 'app-admin-tags',
  templateUrl: './admin-tags.component.html'
})
export class AdminTagsComponent implements OnInit {
  
  constructor(private data: DataService,
    private cookieService: CookieService) { }

  level = 'admin';
  token = this.cookieService.get('token');
  
  tags: [Tag];

  displayedColumns: string[] = ['ID', 'type', 'tag', 'tools'];

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

  edit(tag){
    this.data.save(this.level,"tags", tag, this.token, result => {
      if (result) {
        
      }
    });
  }

  delete(tagID){
    this.data.delete(this.level,"tags", tagID, this.token, result => {
      if (result) {
        let tr = $('#'+tagID).parents('tr');
        tr.remove();
      }
    });
  }

  getLabel(value) {
    switch (value){
      case 0:
        value = 'Thématiques';
        break;
      case 1:
        value = 'Services & équipements';
        break;
    }
    return value;
  }

  ngOnInit() {
    this.data.getList(this.level,"tags", this.token, tags => {
      this.tags = tags;
    });
  }

}