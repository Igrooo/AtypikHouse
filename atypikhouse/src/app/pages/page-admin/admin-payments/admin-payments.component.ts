import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { Payment } from "src/app/logic/Payment";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-payments',
  templateUrl: './admin-payments.component.html'
})
export class AdminPaymentsComponent implements OnInit {
  
  constructor(private data: DataService,
              private datePipe: DatePipe,
              private cookieService: CookieService
              ) {}

  level = 'admin';
  token = this.cookieService.get('token');
  
  payments: [Payment];

  displayedColumns: string[] = ['ID', 'status', 'amount', 'date', 'ID_user', 'ID_booking', 'tools'];

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

  edit(payment){
    this.data.save(this.level,"payments", payment, this.token, result => {
      if (result) {
        
      }
    });
  }

  delete(paymentID){
    this.data.delete(this.level,"payments", paymentID, this.token, result => {
      if (result) {
        let tr = $('#'+paymentID).parents('tr');
        tr.remove();
      }
    });
  }

  getLabel(value) {
    switch (value){
      case 0:
        value = 'Annulé';
        break;
      case 1:
        value = 'En attente';
        break;
      case 2:
        value = 'Validé';
        break;
    }
    return value;
  }

  ngOnInit() {
    this.data.getList(this.level,"payments", this.token, payments => {
      this.payments = payments;
    });
  }

}
