import { Component, OnInit } from '@angular/core';
import { Booking } from "src/app/logic/Booking";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styles: []
})

export class BookingComponent implements OnInit {
  booking: Booking;
  
  constructor() { }

  ngOnInit() {
  }

}
