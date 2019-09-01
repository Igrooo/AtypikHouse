import { Component, OnInit } from '@angular/core';
import { Booking } from "src/app/logic/Booking";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.less']
})

export class BookingComponent implements OnInit {
  booking: Booking;
  
  constructor() { }

  ngOnInit() {
  }

}
