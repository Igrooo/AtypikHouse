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
  listTitle:string;
  filterUser:number;

  bookings: [Booking];
  house: House;
  user: User;

  houseTitles:string[] = [];
  houseCategories:string[] = [];

  icons = Icons;

  dateLabel(date){
    return this.datePipe.transform(date,"dd/MM/yyyy");
  }

  nbNights(dateStart, dateEnd){
    return ( new Date(dateEnd).getTime() - new Date(dateStart).getTime() ) / (1000 * 3600 * 24);
  }

  getHouseTitle(ID){
    this.data.get("houses", ID, house => {
      return house.title;
    });
  }

  getHouseCategory(ID){
    this.data.get("houses", ID, house => {
      return house.ID_category;
    });
  }

  constructor(
    private data: DataService,
    private datePipe: DatePipe,
    private cookieService: CookieService)
    {}

  ngOnInit() {
    this.user = new User;
    if(this.cookieService.get('logged')){
      this.user.ID   = +this.cookieService.get('userID');
      this.user.type = +this.cookieService.get('userType');
      if(this.user.type == 1){
        this.filterUser = this.user.ID;
        this.listTitle = 'Mes réservations de séjours';
      }
      else{
        this.filterUser = 0;
        this.listTitle = 'Réservations de séjours';
      }
    }
    this.data.getList("booking", bookings => {
      if(bookings){
        this.bookings = bookings;
        this.bookings.forEach((booking, index) => {
          this.data.get("houses", booking.ID_house.toString(), house => {
            if(house){
              this.houseTitles[index] = house.title;
              this.houseCategories[index] = house.ID_category;
            }
          });
        });
      }
    });
  }

}
