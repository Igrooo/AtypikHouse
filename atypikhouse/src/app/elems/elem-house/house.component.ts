import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { GeolocationService } from "src/app/geolocation.service";
//import { APIroutes, DataService } from "src/app/data.service";
import { DataService } from "src/app/data.service";
import { House } from "src/app/logic/House";
import { Booking } from 'src/app/logic/Booking';
import { Icons } from "src/app/elems/elem-icon/icons-categories";
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styles: []
})

export class HouseComponent implements OnInit {
  math = Math;

  
  icons = Icons;
  iconsParams:any = {};
  iconsSet      :string = 'assets/icons/travel-set/';
  iconsSize     :string = 'banner';
  iconsColor    :string = '#9dc1bb';
  iconsBgFolder :string = 'data/static/img/houses/';
  
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
              private data: DataService
              ) { }

  routingSubscription: any;

  updatePrice(){
    //console.log(this.dateStart, this.dateEnd, this.nbPersons);
    if(this.dateStart && this.dateEnd && this.nbPersons){
      this.nbNights = ( this.dateEnd.getTime() - this.dateStart.getTime() ) / (1000 * 3600 * 24);
      console.log(this.nbNights);
      if(this.nbNights < 1){
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
    this.booking.date       = new Date();
    this.booking.dateStart  = this.dateStart;
    this.booking.dateEnd    = this.dateEnd;
    this.booking.nbPersons =  this.nbPersons;
    this.booking.ID_user    = 1;
    this.booking.ID_house   = this.house.ID;
    /*
    this.data.save("addBooking", this.booking, result => {
      if (result) {
        this.router.navigate(["/booking", this.booking.ID]);
      }
    });
    */
  }

  ngOnInit() {
    this.house   = new House();
    this.booking = new Booking();

    this.routingSubscription =
      this.route.params.subscribe(params => {
        if(params["id"]) {
          this.data.get("showProduct", params["id"], response => {
            this.house = response;

            this.byNightLabel = ' /nuit';
            this.priceTTC = this.math.round(this.house.price + ((this.house.price/100) * this.house.tax));
            this.totalPrice = this.priceTTC;

            this.iconsParams = {
              size: this.iconsSize,
              set: this.iconsSet,
              group: this.icons[this.house.ID_category - 1].group,
              name: this.icons[this.house.ID_category - 1].name,
              bgFolder: this.iconsBgFolder,
              bg: this.house.ID,
              color: this.iconsColor,
              title: this.house.title,
              subTitle: this.house.zipcode+','+this.house.city,
              cardText: this.house.description,
              cardMarker: this.priceTTC.toString()
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
