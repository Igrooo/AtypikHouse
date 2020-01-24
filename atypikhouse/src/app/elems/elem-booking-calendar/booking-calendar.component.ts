import { Component, OnInit, Inject } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {

}

@Component({
  selector: 'app-booking-calendar',
  templateUrl: './booking-calendar.component.html',
  styles: ['.ah-booking-calendar h2{margin: 0;font-size: 2em;} .mat-dialog-content{max-height: 80vh;} .fc-time{display:none;}']
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


