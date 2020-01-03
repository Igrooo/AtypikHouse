import { Component, OnInit, Inject } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  
}

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html'
})
export class BookingCalendarComponent implements OnInit {

  calendarPlugins = [dayGridPlugin]; 
  
  constructor(
    public dialogRef: MatDialogRef<BookingCalendarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}


