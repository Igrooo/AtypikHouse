import { Component, OnInit, Input } from '@angular/core';

import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { House } from "src/app/logic/House";
import { Booking } from "src/app/logic/Booking";
import { User } from "src/app/logic/User";
import { Icons } from "src/app/elems/elem-icon/icons-categories"
import { BookingCalendarComponent } from '../../elem-booking-calendar/booking-calendar.component';

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html'
})
export class ListHouseComponent implements OnInit {
  
  constructor(private data: DataService,
              private cookieService: CookieService,
              public dialog: MatDialog,
              private datePipe: DatePipe
              ) { }

  @Input() listTitle:string;
  @Input() filterUser:number;
  
  level = 'user';
  token = this.cookieService.get('token');

  math = Math;

  house: House;
  
  houses: [House];
  bookings = [];

  user: User;
  userPro:boolean = false;

  icons = Icons;
  iconsSet      :string = 'travel';
  iconsSize     :string = 'card';
  iconsColor    :string = '#9dc1bb';
  iconsBgFolder :string = 'houses';

  deleteDialogID:number = 0;

  isReady:boolean = false;

  nbNights(dateStart, dateEnd){
    return ( new Date(dateEnd).getTime() - new Date(dateStart).getTime() ) / (1000 * 3600 * 24);
  }

  openCalendar(houseID): void {
    let bookingsdata = this.getBookingsData(houseID);
    if(bookingsdata.length != 0){
      const dialogRef = this.dialog.open(BookingCalendarComponent, {
        width: '1000px',
        data: bookingsdata
      });
      dialogRef.afterClosed().subscribe(result => {
        //console.log('The dialog was closed');
      });
    }
  }

  hasBookingData(houseID){
    let bookingsdata = this.getBookingsData(houseID);
    if(bookingsdata.length != 0){
      return true;
    }
    else{
      return false;
    }
  }

  getBookingsData(houseID){
    let bookingsdata = [];
      this.bookings.forEach(booking => {
        if(booking.ID_house == houseID){
          let color = '#222222';
          let label = '<br>' ;
          switch(booking.status){
            case 0: color = '#bcd5d1'; label = '-  Annulée  - ';
            break;
            case 1: color = '#15a08c'; label = '-  En attente  - ';
            break;
            case 2: color = '#ba9077'; label = '-  Validée  - ';
            break;
          }
          let url = booking.ID;
          let title = label+this.nbNights(booking.dateStart, booking.dateEnd)+' nuit(s) pour '+booking.nbPersons.toString()+' p.';
          let dateStartLabel = this.datePipe.transform(booking.dateStart,"yyyy-MM-ddT12:00:00.000Z");
          let dateEndLabel = this.datePipe.transform(booking.dateEnd,"yyyy-MM-ddT12:00:00.000Z");
          bookingsdata.push({title: title, start: dateStartLabel, end: dateEndLabel, backgroundColor:color, borderColor:color, url:url});
        }
      });
    return bookingsdata;
  }

  getTotalBooking(status,houseID){
    let total = 0;
    this.bookings.forEach(booking => {
      if(booking.ID_house == houseID && booking.status == status){
        total++;
      }
    });
    if (total == 0){
      return 'Aucune'
    }
    return total.toString();
  }

  updateHouse(status, houseID) {
    this.house = new House;
    this.data.get(this.level,"houses", houseID, this.token, house => {
      if (house) {
        this.house = house;
        this.house.status = status;
        this.data.save(this.level,"houses", this.house, this.token, success => {
          if (success) {
            setTimeout(function() {
              window.location.reload();
            }, 500);
          }
        });
      }
    });
  }

  openDeleteHouse(houseID) {
    this.deleteDialogID = houseID;
  }

  deleteHouse(houseID) {
    //need delete linked bookings before (foreign key)
    this.data.delete(this.level,"houses", houseID, this.token, result => {
      if (result) {
        window.location.reload();
      }
    });
  }
  
  ngOnInit() {
    this.user = new User;
    if(this.cookieService.get('logged')){
      this.user.ID   = +this.cookieService.get('userID');
      this.user.type = +this.cookieService.get('userType');
      if(this.user.type == 1){
        this.filterUser = this.user.ID;
        this.listTitle = 'Mes annonces';
      }
      else{
        this.filterUser = 0;
        this.listTitle = 'Annonces';
      }
      this.data.get(this.level,"users",this.user.ID.toString(), this.token, user =>{
        this.user = user;
        if(this.user.siret != 0){
          this.userPro = true;
        }
      });
    }
    this.icons = Icons;
    this.data.getList(this.level,"houses", this.token, houses => {
      this.houses = houses;
    });

    this.data.getList(this.level,"booking", this.token, bookings => {
      this.bookings = bookings;
    });
  }

  ngAfterContentChecked() {
    this.isReady = true;
  }
}
