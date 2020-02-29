import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { FormControl, FormBuilder } from '@angular/forms';
import { House } from "src/app/logic/House";
import { Category } from "src/app/logic/Category";
import { Activity } from "src/app/logic/Activity";
import { Tag } from "src/app/logic/Tag";
import { Pic } from "src/app/logic/Pic";

@Component({
  selector: 'app-admin-houses',
  templateUrl: './admin-houses.component.html'
})
export class AdminHousesComponent implements OnInit {
  
  constructor(private data: DataService,
              private cookieService: CookieService
              ) { }
  
  level = 'admin';
  token = this.cookieService.get('token');
  
  houses: [House];
  categories: [Category];
  activities: [Activity];
  tags: [Tag];
  pics: [Pic];

  displayedColumns: string[] = ['ID', 'status', 'ID_category', 'ID_user', 'title', 'description', 'address', 'zipcode', 'city', 'nbBeds', 'price', 'tax', 'listID_tags', 'listID_tags_services', 'listID_pics', 'listID_activities', 'tools'];

  editOn:string;
  
  isReadonly:boolean = true;
  
  tagsForm = new FormControl();
  tags2Form = new FormControl();
  picsForm = new FormControl();


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

  edit(house){
    this.data.save(this.level,"houses", house, this.token, result => {
      if (result) {
      }
    });
  }

  delete(houseID){
    this.data.delete(this.level,"houses", houseID, this.token, result => {
      if (result) {
        let tr = $('#'+houseID).parents('tr');
        tr.remove();
      }
    });
  }

  getLabel(value) {
    switch (value){
      case 0:
        value = 'Dépubliée';
        break;
      case 1:
        value = 'Publiée';
        break;
      case 2:
        value = 'Mise en avant';
        break;
    }
    return value;
  }
  
  ngOnInit() {
    this.data.getList(this.level,"houses", this.token, houses => {
      this.houses = houses;
    });
    this.data.getList(this.level,"categories", this.token, categories => {
      this.categories = categories;
    });
    this.data.getList(this.level,"activities", this.token, activities => {
      this.activities = activities;
    });
    this.data.getList(this.level,"tags", this.token, tags => {
      this.tags = tags;
    });
    this.data.getList(this.level,"pics", this.token, pics => {
      this.pics = pics;
    });
  }

}
