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
  
  houses: [House];
  bookings: [Booking];

  user: User;

  icons = Icons;
  iconsSet      :string = 'travel';
  iconsSize     :string = 'card';
  iconsColor    :string = '#9dc1bb';
  iconsBgFolder :string = 'houses';

  viewDate: Date = new Date();
  events = [];

  constructor(private data: DataService,
              private cookieService: CookieService,
              public dialog: MatDialog
              ) { }

  openCalendar(): void {
    const dialogRef = this.dialog.open(BookingCalendarComponent, {
      width: '1000px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
            

  ngOnInit() {
    this.user = new User;
    if(this.cookieService.get('logged')){
      this.user.ID = +this.cookieService.get('userID');
      this.user.type = !!+this.cookieService.get('userType');
      if(this.user.type){
        this.filterUser = this.user.ID;
        this.listTitle = 'Mes annonces';
      }
      else{
        this.filterUser = 0;
        this.listTitle = 'Annonces';
      }
    }
    this.icons = Icons;
    this.data.getList("houses", houses => {
      this.houses = houses;
    });
    this.data.getList("booking", bookings => {
      this.bookings = bookings;
    });
  }

}
