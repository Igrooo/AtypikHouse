import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { User } from "src/app/logic/User";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html'
})
export class AdminUsersComponent implements OnInit {
  
  constructor(private data: DataService,
    private cookieService: CookieService) { }
  
  level = 'admin';
  token = this.cookieService.get('token');
  
  users: [User];

  displayedColumns: string[] = ['ID', 'type', 'email', 'name', 'firstname', 'address', 'zipcode', 'city', 'siret', 'tools'];

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

  edit(user){
    this.data.save(this.level,"users", user, this.token, result => {
      if (result) {
        
      }
    });
  }

  delete(userID){
    this.data.delete(this.level,"users", userID, this.token, result => {
      if (result) {
        let tr = $('#'+userID).parents('tr');
        tr.remove();
      }
    });
  }

  getLabel(value) {
    switch (value){
      case 0:
        value = 'Administrateur';
        break;
      case 1:
        value = 'Utilisateur';
        break;
    }
    return value;
  }

  ngOnInit() {
    this.data.getList(this.level,"users", this.token, users => {
      this.users = users;
    });
  }

}