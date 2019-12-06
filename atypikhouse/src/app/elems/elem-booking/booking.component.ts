import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';
import { DataService } from 'src/app/data.service';
import { Booking } from "src/app/logic/Booking";
import { House } from "src/app/logic/House";


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styles: []
})

export class BookingComponent implements OnInit {
  math = Math;

  booking: Booking;
  house: House;
  
  priceTTC:number;
  totalPrice:number;
  nbNights: number;

  payed: string;

  dateStartLabel: string;
  dateEndLabel: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private data: DataService,
              private datePipe: DatePipe
              ) { }

  routingSubscription: any;

  validBooking(){
    this.payed = 'payed';
  }

  ngOnInit() {

    this.booking = new Booking();
    this.house = new House();

    this.payed = '';

    this.routingSubscription =
      this.route.params.subscribe(params => {
        if(params["id"]) {
          this.data.get("booking", params["id"], booking => {
            if (booking) {
              this.booking = booking;
              this.nbNights = ( new Date(this.booking.dateEnd).getTime() - new Date(this.booking.dateStart).getTime() ) / (1000 * 3600 * 24);
              this.dateStartLabel = this.datePipe.transform(this.booking.dateStart,"dd/MM/yyyy");
              this.dateEndLabel = this.datePipe.transform(this.booking.dateEnd,"dd/MM/yyyy");

              this.data.get("houses", this.booking.ID_house.toString(), house => {
                if (house) {
                  this.house = house;
                  this.priceTTC = this.math.round(this.house.price + ((this.house.price/100) * this.house.tax));
                  this.totalPrice = this.priceTTC * this.nbNights * this.booking.nbPersons;
                }
              });
            }
          });
        }
      });
  }

}
