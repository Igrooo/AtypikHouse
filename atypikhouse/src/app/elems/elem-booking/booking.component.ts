import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';
import { DataService } from 'src/app/data.service';
import { CookieService } from "ngx-cookie-service";
import { Booking } from "src/app/logic/Booking";
import { House } from "src/app/logic/House";
import { Payment } from 'src/app/logic/Payment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html'
})

export class BookingComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private data: DataService,
              private datePipe: DatePipe,
              private cookie: CookieService
              ) { }

  routingSubscription: any;

  level = 'user';
  token = this.cookie.get('token');

  math = Math;

  house: House;
  booking: Booking;
  payments: [Payment];
  payment: Payment;
  
  priceTTC:number;
  totalPrice:number;
  nbNights: number;

  payed: string;

  dateStartLabel: string;
  dateEndLabel: string;

  short:boolean = false;
  bookingPageClasses:string = '';

  @Input() bookingID = 0;

  validBooking(){
    this.data.getList(this.level,"payments", this.token, payments => {
      if(payments){
        this.payments = payments;
        //console.log(payments);
        this.payments.forEach(payment => {
          if(payment.ID_booking == this.booking.ID){
            this.payment = payment;
            //console.log(this.payment);
            this.payment.status = 2;
            this.data.save(this.level,"payments", this.payment, this.token, insertID =>{
              if (Number.isInteger(insertID)) {
                this.booking.status = 2;
                this.data.save(this.level,"booking", this.booking, this.token, insertID =>{});
              }
            });
          }
        });
      }
    });
    this.payed = 'payed';
  }

  cancelBooking(){

  }

  getBooking(bookingID) {
    this.data.get(this.level,"booking", bookingID, this.token, booking => {
      if (booking) {
        this.booking = booking;
        this.nbNights = ( new Date(this.booking.dateEnd).getTime() - new Date(this.booking.dateStart).getTime() ) / (1000 * 3600 * 24);
        this.dateStartLabel = this.datePipe.transform(this.booking.dateStart,"dd/MM/yyyy");
        this.dateEndLabel = this.datePipe.transform(this.booking.dateEnd,"dd/MM/yyyy");
        this.data.get(this.level,"houses", this.booking.ID_house.toString(), this.token, house => {
          if (house) {
            this.house = house;
            this.priceTTC = this.math.round(this.house.price + ((this.house.price/100) * this.house.tax));
            this.totalPrice = this.priceTTC * this.nbNights * this.booking.nbPersons;
          }
        });
      }
    });
  }
  getID(){
    if(this.bookingID == 0){
      this.routingSubscription =
      this.route.params.subscribe(params => {
        if(params["id"]) {
          this.bookingID = params["id"];
        }
      });
      this.bookingPageClasses = 'ah-container-primary ah-section ah-container-product-booking';
    }
    else{
      this.short = true;
    }
  }

  ngOnInit() {

    this.booking = new Booking();
    this.house = new House();

    this.payed = '';

    this.getID();
    this.getBooking(this.bookingID);

  }

  ngOnChanges(){
    this.getID();
    //console.log(this.bookingID);
    this.getBooking(this.bookingID);
  }

}
