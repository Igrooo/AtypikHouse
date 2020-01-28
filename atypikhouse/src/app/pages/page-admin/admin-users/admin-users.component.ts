import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { User } from "src/app/logic/User";

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html'
})
export class AdminUsersComponent implements OnInit {
  users: [User];

  displayedColumns: string[] = ['ID', 'type', 'email', 'name', 'firstname', 'address', 'zipcode', 'city', 'siret', 'tools'];

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

  edit(user){
    this.data.save("users", user, result => {
      if (result) {
        
      }
    });
  }

  delete(userID){
    this.data.delete("users", userID, result => {
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
    this.data.getList("users", users => {
      this.users = users;
    });
  }

}