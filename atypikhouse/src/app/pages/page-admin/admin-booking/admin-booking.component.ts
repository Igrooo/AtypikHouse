import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { Booking } from "src/app/logic/Booking";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html'
})
export class AdminBookingComponent implements OnInit {
  
  constructor(private data: DataService,
              private datePipe: DatePipe,
              private cookie: CookieService
              ) {}

  level = 'admin';
  token = this.cookie.get('token');

  bookings: [Booking];

  displayedColumns: string[] = ['ID', 'status', 'nbPersons', 'date', 'dateStart', 'dateEnd', 'ID_user', 'ID_house', 'tools'];

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

  edit(booking){
    this.data.save(this.level,"booking", booking, this.token, result => {
      if (result) {
        
      }
    });
  }

  delete(bookingID){
    this.data.delete(this.level,"booking", bookingID, this.token, result => {
      if (result) {
        let tr = $('#'+bookingID).parents('tr');
        tr.remove();
      }
    });
  }

  getLabel(value) {
    switch (value){
      case 0:
        value = 'Annulée';
        break;
      case 1:
        value = 'En attente';
        break;
      case 2:
        value = 'Validée';
        break;
    }
    return value;
  }
  
  ngOnInit() {
    this.data.getList(this.level,"booking", this.token, bookings => {
      this.bookings = bookings;
    });
  }

}
