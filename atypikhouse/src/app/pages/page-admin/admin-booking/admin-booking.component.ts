import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { Booking } from "src/app/logic/Booking";

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styles: []
})
export class AdminBookingComponent implements OnInit {
  list: [Booking];

  displayedColumns: string[] = ['ID', 'status', 'nbPersons', 'date', 'dateStart', 'dateEnd', 'ID_user', 'ID_house', 'tools'];

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

  edit(booking){
    this.data.save("booking", booking, result => {
      if (result) {
        
      }
    });
  }

  delete(bookingID){
    this.data.delete("booking", bookingID, result => {
      if (result) {
        let tr = $('#'+bookingID).parents('tr');
        tr.remove();
      }
    });
  }
  
  ngOnInit() {
    this.data.getList("booking", list => {
      this.list = list;
    });
  }

}
