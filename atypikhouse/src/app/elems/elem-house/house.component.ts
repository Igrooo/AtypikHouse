import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { GeolocationService } from "src/app/geolocation.service";
import { DataService } from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { House } from "src/app/logic/House";
import { Booking } from 'src/app/logic/Booking';
import { Payment } from 'src/app/logic/Payment';
import { Tag } from "src/app/logic/Tag";
import { Activity } from "src/app/logic/Activity";
import { Icons } from "src/app/elems/elem-icon/icons-categories";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html'
})

export class HouseComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private geoloc: GeolocationService,
              private data: DataService,
              private datePipe: DatePipe,
              private cookie: CookieService
              ) { }

  routingSubscription: any;

  level = 'public';
  token = 'public';
  math = Math;

  logged:boolean = false;
  editable:boolean = false;

  icons = Icons;
  iconsSet      :string = 'travel';
  iconsSize     :string = 'banner';
  iconsColor    :string = '#9dc1bb';
  iconsBgFolder :string = 'houses';
  
  house: House;
  booking: Booking;
  payment: Payment;

  tagsList:string[] = [];
  tags:Tag[]= [];

  activitiesList:string[] = [];
  activities:Activity[]= [];

  tagsActivityList:string[] = [];
  tagsActivity = [];

  markers = [];

  bookingMinDate = new Date();
  priceTTC:number;

  totalPrice:number;

  dateStart: Date;
  dateEnd: Date;
  nbPersons: number;
  nbNights: number;

  byNightLabel: string;

  complete:boolean;

  nbPersonsMax:number;

  arrayNbPersons(max:number): any[]{
    return Array(max);
  }

  goMap(house: House) {
    const mapURL = this.geoloc.getMapLink(house.address,house.city);
    window.open(mapURL, "_blank");
  }

  share(target:string, house: House) {
    let url = '';
    if ('share' in navigator) {
      (navigator as any).share({
        title: house.title + ` - ` + house.city + "," + house.address,
        text: house.description,
        url: window.location.href
      }).then( () => console.log("shared")).catch( () =>  console.log("error sharing"));
    } else {
        if(target == 'whatsapp'){
          url = 'whatsapp://send?text=';
        }
        const shareTxt = house.title + ` - ` + house.city + "," + house.address + ` - ` + house.description;
        const shareURL = url + encodeURIComponent(shareTxt);
        window.open(shareURL, "_blank");
    }
  }

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
    this.nbPersons = event.value;
    this.updatePrice();
  }

  newPayment(booking, ID){
    this.level = 'user';
    this.token = this.cookie.get('token');
    this.payment = new Payment();
    this.payment.status = booking.status;
    this.payment.amount = this.totalPrice;
    this.payment.date   = booking.date;
    this.payment.ID_user = booking.ID_user;
    this.payment.ID_booking = ID;
    this.data.save(this.level,"payments", this.payment, this.token, payment => {});
  }

  newBooking(){
    this.level = 'user';
    this.token = this.cookie.get('token');
    this.booking = new Booking();
    this.booking.status     = 1;
    this.booking.date       = this.datePipe.transform(new Date(),"yyyy-MM-dd");
    this.booking.dateStart  = this.datePipe.transform(this.dateStart,"yyyy-MM-dd");
    this.booking.dateEnd    = this.datePipe.transform(this.dateEnd,"yyyy-MM-dd");
    this.booking.nbPersons  = this.nbPersons;
    this.booking.ID_user    = +this.cookie.get('userID');
    this.booking.ID_house   = this.house.ID;

    this.data.save(this.level,"booking", this.booking, this.token, insertID => {
      if (Number.isInteger(insertID)) {
        this.newPayment(this.booking,insertID)
        this.router.navigate(["/booking", insertID]);
      }
    });
  }

  ngOnInit() {
    this.house   = new House();
    this.priceTTC = 0;
    this.routingSubscription =
      this.route.params.subscribe(params => {
        if(params["id"]) {
          this.data.get(this.level,"houses", params["id"], this.token, house => {
            if (house) {
              this.house = house;

              if(!!this.cookie.get('logged') == true) {
                this.logged = true;
                /*Display cta overlay editor button if logged user is admin or house user*/
                if((+this.cookie.get('userType') == 0) || (+this.cookie.get('userID') == this.house.ID_user)){
                  this.editable = true;
                }
              }
              if(this.house.listID_tags != ''){
                this.tagsList = this.house.listID_tags.split(',');
                this.tagsList.forEach(tagID => {
                  this.data.get(this.level,"tags", tagID, this.token, tag => {
                    if(tag){
                      this.tags.push(tag);
                    }
                  });
                });
              }

              this.nbPersonsMax = this.house.nbBeds;
              this.byNightLabel = ' /nuit';
              this.priceTTC = this.math.round(this.house.price + ((this.house.price/100) * this.house.tax));
              this.totalPrice = this.priceTTC;

              let location = this.house.address+' ,'+this.house.city;
              this.data.getLatLng(location, response =>{
                if(response){
                  this.house.locationLat  = response.results[0].geometry.location.lat;
                  this.house.locationLng = response.results[0].geometry.location.lng;
                  this.markers.push({lat: this.house.locationLat, lng: this.house.locationLng, icon: '/assets/img/marker-green.png'});
                }
              });

              if(this.house.listID_activities != ''){
                this.activitiesList = this.house.listID_activities.split(',');
                this.activitiesList.forEach(activityID => {
                  this.data.get(this.level,"activities", activityID, this.token, activity => {
                    if(activity){
                      this.activities.push(activity);
                      this.markers.push({lat: activity.locationLat, lng: activity.locationLng, icon: '/assets/img/marker-grey.png'});
                      if(activity.listID_tags != ''){
                        let tags:Tag[]= [];
                        this.tagsActivityList = activity.listID_tags.split(',');
                        this.tagsActivityList.forEach(tagID => {
                          this.data.get(this.level,"tags", tagID, this.token, tag => {
                            if(tag){
                              tags.push(tag.tag);
                            }
                          });
                        });
                        this.tagsActivity.push(tags);
                      }
                    }
                  });
                });
              }
            }
          });
        }
      });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
