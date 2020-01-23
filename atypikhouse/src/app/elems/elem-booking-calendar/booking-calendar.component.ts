import { Component, OnInit, Input, Inject } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from "src/app/data.service";
import { Booking } from "src/app/logic/Booking";

export interface DialogData {

}

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styles: ['.ah-booking-calendar h2{margin: 0;font-size: 2em;} .mat-dialog-content{max-height: 80vh;}']
})
export class BookingCalendarComponent implements OnInit {

  bookings: [Booking];

  events: [];

  calendarPlugins = [dayGridPlugin];

  constructor(
    private asyncdata: DataService,
    public dialogRef: MatDialogRef<BookingCalendarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    console.log(MAT_DIALOG_DATA);
  }

}


