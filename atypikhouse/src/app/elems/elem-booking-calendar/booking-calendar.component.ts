import { Component, OnInit, Inject } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {

}

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styles: ['.ah-booking-calendar h2{margin: 0;font-size: 2em;}',
            '.mat-dialog-content{max-height: 80vh;}',
            '.fc-time{display:none !important;}',
            '.fc-unthemed td.fc-today{background:#ece3de;}',
            '.fc-day-grid-event .fc-content{line-height:3em}']
})
export class BookingCalendarComponent implements OnInit {

  calendarPlugins = [dayGridPlugin,listPlugin];

  bookingDetail:boolean = false;
  bookingID = 0;

  constructor(
    public dialogRef: MatDialogRef<BookingCalendarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  openBooking(event){
    event.jsEvent.preventDefault(); // don't let the browser navigate
    if (event.event.url) {
      this.bookingDetail = true;
      this.bookingID = event.event.url;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

  }

}


