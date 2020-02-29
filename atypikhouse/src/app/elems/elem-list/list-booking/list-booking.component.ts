import { Component, OnInit, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { Booking } from "src/app/logic/Booking";
import { House } from "src/app/logic/House";
import { User } from "src/app/logic/User";
import { Icons } from "src/app/elems/elem-icon/icons-categories"

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html'
})
export class ListBookingComponent implements OnInit {

  constructor(private data: DataService,
              private datePipe: DatePipe,
              private cookie: CookieService
              ) { }

  level = 'user';
  token = this.cookie.get('token');
  
  listTitle:string;
  filterUser:number;

  bookings: [Booking];
  house: House;
  user: User;

  houseTitles:string[] = [];
  houseCategories:string[] = [];

  icons = Icons;

  isReady:boolean = false;

  cancelDialogID:number = 0;

  dateLabel(date){
    return this.datePipe.transform(date,"dd/MM/yyyy");
  }

  nbNights(dateStart, dateEnd){
    return ( new Date(dateEnd).getTime() - new Date(dateStart).getTime() ) / (1000 * 3600 * 24);
  }

  getHouseTitle(ID){
    this.data.get(this.level,"houses", ID, this.token, house => {
      return house.title;
    });
  }

  getHouseCategory(ID){
    this.data.get(this.level,"houses", ID, this.token, house => {
      return house.ID_category;
    });
  }

  ngOnInit() {
    this.user = new User;
    if(this.cookie.get('logged')){
      this.user.ID   = +this.cookie.get('userID');
      this.user.type = +this.cookie.get('userType');
      if(this.user.type == 1){
        this.filterUser = this.user.ID;
        this.listTitle = 'Mes réservations de séjours';
      }
      else{
        this.filterUser = 0;
        this.listTitle = 'Réservations de séjours';
      }
    }
    this.data.getList(this.level,"booking", this.token, bookings => {
      if(bookings){
        this.bookings = bookings;
        this.bookings.forEach((booking, index) => {
          this.data.get(this.level,"houses", booking.ID_house.toString(), this.token, house => {
            if(house){
              this.houseTitles[index] = house.title;
              this.houseCategories[index] = house.ID_category;
            }
          });
        });
      }
    });
  }

  ngAfterContentChecked() {
    this.isReady = true;
  }

  openCancelBooking(bookingID) {
    this.cancelDialogID = bookingID;
  }

  cancelBooking(bookingID){
    
  }
}
