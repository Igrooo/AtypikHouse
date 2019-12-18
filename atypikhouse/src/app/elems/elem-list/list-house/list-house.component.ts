import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { House } from "src/app/logic/House";
import { User } from "src/app/logic/User";
import { Icons } from "src/app/elems/elem-icon/icons-categories"

@Component({
  selector: 'app-list-house',
  templateUrl: './list-house.component.html',
  styles: []
})
export class ListHouseComponent implements OnInit {
  @Input() listTitle:string;
  @Input() filterUser:number;

  math = Math;
  
  list: [House];

  user: User;

  icons =  Icons;
  iconsSet      :string = 'travel';
  iconsSize     :string = 'card';
  iconsColor    :string = '#9dc1bb';
  iconsBgFolder :string = 'houses';

  constructor(private data: DataService,
              private router: Router,
              private cookieService: CookieService
              ) { }

  goDetails(house: House) {
    this.router.navigate(["/house", house.ID]);
  }

  ngOnInit() {

    this.user = new User;
    if(this.cookieService.get('logged')){
      this.user.ID = +this.cookieService.get('userID');
      this.user.type = !!+this.cookieService.get('userType');
      if(this.user.type){
        this.filterUser = +this.cookieService.get('userID');
        this.listTitle = 'Mes annonces';
      }
      else{
        this.filterUser = 0;
        this.listTitle = 'Annonces';
      }
    }
    this.icons = Icons;
    this.data.getList("houses", list => {
      this.list = list;
    });
  }

}
