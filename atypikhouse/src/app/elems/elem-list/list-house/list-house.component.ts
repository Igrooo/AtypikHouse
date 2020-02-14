import { Component, OnInit, Input } from '@angular/core';

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
  @Input() listTitle:string;
  @Input() filterUser:number;

  math = Math;

  house: House;
  
  houses: [House];
  bookings: [Booking];

  user: User;
  userPro:boolean = false;

  icons = Icons;
  iconsSet      :string = 'travel';
  iconsSize     :string = 'card';
  iconsColor    :string = '#9dc1bb';
  iconsBgFolder :string = 'houses';

  deleteDialogID:number = 0;

  viewDate: Date = new Date();
  events = [];

  constructor(private data: DataService,
              private cookieService: CookieService,
              public dialog: MatDialog
              ) { }

  nbNights(dateStart, dateEnd){
    return ( new Date(dateEnd).getTime() - new Date(dateStart).getTime() ) / (1000 * 3600 * 24);
  }

  openCalendar(houseID): void {

    this.data.getList("booking", bookings => {
      if(bookings){
        let bookingsdata = [];
        this.bookings = bookings;
        this.bookings.forEach((booking, index) => {
          if(booking.ID_house == houseID){
            let color = '#15a08c';
            switch(booking.status){
              case 0: color = '#bcd5d1';
              case 1: color = '#ba9077';
              case 2: color = '#15a08c';
            }
            let title = this.nbNights(booking.dateStart, booking.dateEnd)+' nuit(s) pour '+booking.nbPersons.toString()+' p.';
            bookingsdata.push({title: title, start: booking.dateStart, end: booking.dateEnd, backgroundColor:color, borderColor:color});
          }
        });

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
    });
  }

  updateHouse(status, houseID) {
    this.house = new House;
    this.data.get("houses", houseID, house => {
      if (house) {
        this.house = house;
        console.log(this.house);
        this.house.status = status;
        console.log(this.house);
        this.data.save("houses", this.house, success => {
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
    this.data.delete("houses", houseID, result => {
      if (result) {
        window.location.reload();
      }
    });
  }
  
  totalBooking = 0;
  totalWaitingBooking = 0;
  
  counter:number = 0;
  getTotalBooking(houseID){
    /*
    if(this.counter < 1){
      this.data.getTotalBooking(houseID, total => {
        this.totalBooking = total["COUNT(*)"];
        console.log(this.totalBooking);
        return total["COUNT(*)"];
      });
      this.counter++;
    }
    */
  }

  getTotalWaitingBooking(houseID){
    /*
    this.data.getTotalWaitingBooking(houseID, total => {
      console.log('wait booking: ' +total["COUNT(*)"]);
      return total["COUNT(*)"];
    });
    */
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
      this.data.get("users",this.user.ID.toString(), user =>{
        this.user = user;
        if(this.user.siret != 0){
          this.userPro = true;
        }
      });
    }
    this.icons = Icons;
    this.data.getList("houses", houses => {
      this.houses = houses;
    });
  }
}
