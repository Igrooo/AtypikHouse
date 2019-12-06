import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';
import { GeolocationService } from "src/app/geolocation.service";
//import { APIroutes, DataService } from "src/app/data.service";
import { DataService } from "src/app/data.service";
import { House } from "src/app/logic/House";
import { Booking } from 'src/app/logic/Booking';
import { Icons } from "src/app/elems/elem-icon/icons-categories";
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-form-house',
  templateUrl: './form-house.component.html',
  styles: []
})

export class FormHouseComponent implements OnInit {
  math = Math;

  
  icons = Icons;
  iconsSet      :string = 'travel';
  iconsSize     :string = 'banner';
  iconsColor    :string = '#9dc1bb';
  iconsBgFolder :string = 'houses';
  
  house: House;
  booking: Booking;

  bookingMinDate = new Date();
  priceTTC:number;

  totalPrice:number;

  dateStart: Date;
  dateEnd: Date;
  nbPersons: number;
  nbNights: number;

  byNightLabel: string;

  complete:boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private geolocation: GeolocationService,
              private data: DataService,
              private datePipe: DatePipe
              ) { }

  routingSubscription: any;

  updatePrice(){
    //console.log(this.dateStart, this.dateEnd, this.nbPersons);
    if(this.dateStart && this.dateEnd && this.nbPersons){
      this.nbNights = ( this.dateEnd.getTime() - this.dateStart.getTime() ) / (1000 * 3600 * 24);
      //console.log(this.nbNights);
      if(this.nbNights < 1){
        this.byNightLabel = ' /nuit';
        this.totalPrice = this.priceTTC;
        this.complete = false;
      }
      else{
        this.byNightLabel = ' pour '+this.math.round(this.nbNights).toString()+' nuit(s)';
        this.totalPrice = this.math.round(this.priceTTC * this.nbNights * this.nbPersons);
        this.complete = true;
      }
    }
    else{
      this.byNightLabel = ' /nuit';
      this.totalPrice = this.priceTTC;
      this.complete = false;
    }
  }

  onInput(dateInput :string, event: MatDatepickerInputEvent<Date>){
    if(dateInput == 'start'){
      this.dateStart = event.value;
    }
    if(dateInput == 'end'){
      this.dateEnd = event.value;
    }
    this.updatePrice()
  }

  onChange(event) {
    //console.log(event.value);
    this.nbPersons = event.value;
    this.updatePrice();
  }

  newBooking(){
    this.booking.status     = 1;
    this.booking.date       = this.datePipe.transform(new Date(),"yyyy-MM-dd");
    this.booking.dateStart  = this.datePipe.transform(this.dateStart,"yyyy-MM-dd");
    this.booking.dateEnd    = this.datePipe.transform(this.dateEnd,"yyyy-MM-dd");
    this.booking.nbPersons =  this.nbPersons;
    this.booking.ID_user    = 1;
    this.booking.ID_house   = this.house.ID;
    
    //console.log(this.booking);

    this.data.save("booking", this.booking, booking => {
      if (booking) {
        this.router.navigate(["/booking", booking.insertId]);
      }
    });

  }

  ngOnInit() {
    this.house   = new House();
    this.booking = new Booking();
    this.priceTTC = 0;

    this.routingSubscription =
      this.route.params.subscribe(params => {
        if(params["id"]) {
          this.data.get("houses", params["id"], house => {
            if (house) {
              this.house = house;

              this.byNightLabel = ' /nuit';
              this.priceTTC = this.math.round(this.house.price + ((this.house.price/100) * this.house.tax));
              this.totalPrice = this.priceTTC;
            }
          });
        }
      });
      /*
    this.geolocation.requestLocation(location => {
      if (location) {
        this.house.location.latitude = location.latitude;
        this.house.location.longitude = location.longitude;
      }
    });
     */

  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
/*


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { House } from "src/app/logic/House";
import { Category } from "src/app/logic/Category";
import { GeolocationService } from "src/app/geolocation.service";
import { DataService } from "src/app/data.service";


export class FormHouseComponent implements OnInit {

  house: House;
  types = [Category];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private geolocation: GeolocationService,
              private data: DataService
              ) { }


  routingSubscription: any;

  cancel() {
    this.router.navigate(["/house", this.house.ID]);
  }

  save() {
    this.data.save("houses", this.house, result => {
      if (result) {
        this.router.navigate(["/house", this.house.ID]);
      }
    });
  }

  ngOnInit() {
    this.house = new House();

    this.routingSubscription =
      this.route.params.subscribe(params => {
        if(params["id"]) {
          this.data.get("houses", params["id"], result => {
            this.house = result;
          });
        }
      });

    this.geolocation.requestLocation(location => {
      if (location) {
        this.house.location.latitude = location.latitude;
        this.house.location.longitude = location.longitude;
      }
    });


  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
*/