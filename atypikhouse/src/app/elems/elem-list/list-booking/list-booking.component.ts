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
  templateUrl: './list-booking.component.html',
  styles: []
})
export class ListBookingComponent implements OnInit {
  listTitle:string = 'Mes réservations de séjours';
  filterUser:number;

  list: [Booking];
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
    this.filterUser = +this.cookieService.get('userID');
    this.icons = Icons;
    this.data.getList("booking", list => {
      if(list){
        this.list = list;
        this.list.forEach((booking, index) => {
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
