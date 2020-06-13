import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { GeolocationService } from "src/app/geolocation.service";
import { Category } from "src/app/logic/Category";
import { Tag } from "src/app/logic/Tag";
import { User } from "src/app/logic/User";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private data: DataService,
              private geoloc: GeolocationService,
              private router: Router,
              private cookie: CookieService
              ) { }

  level = 'public';
  token = 'public';

  public randomBanner: number = Math.floor((Math.random() * 7) + 1);

  categories: [Category];
  tags: [Tag];

  user: User;

  nbPersonsMax:number;

  logged:boolean = false;

  arrayNbPersons(max:number): any[]{
    return Array(max);
  }

  UItoggleSidenav(){
    $('#sidenav').toggleClass('open');
    $('#sidenav-cta').toggleClass('open');
    $('#searchbox, main, aside').toggleClass('sidenav-overlay');
  }

  login(){
    this.router.navigate(["/login"]);
  }
  logout(){
    this.cookie.delete('logged');
    this.cookie.delete('userID');
    this.cookie.delete('userType');
    this.cookie.delete('token');
    this.router.navigate(["/logout"]);
  }
  goAccount(){
    this.router.navigate(["/user", this.user.ID]);
  }
  admin(){
    this.router.navigate(["/admin"]);
  }

  searchbox(mode:string){
    if(mode == 'open'){
      $('.ah-page').addClass('open-searchbox');
      $('html, body').animate({ scrollTop: 0 }, 500);
    }
    else if (mode == 'top'){
      $('html, body').animate({ scrollTop: 0 }, 500);
    }
    else{
      $('.ah-page').removeClass('open-searchbox');
    }
  }
  searchboxLocation(locationMode){
    if(locationMode.value == 'location-user'){
      this.geoloc.requestLocation(location => {
        if (location) {
          console.log('User Location: '+location.latitude,location.longitude);
        }
      });
    }
  }
  search() {
    this.router.navigate(["/houses"]);
  }

  posts() {
    
  }

  ngOnInit() {

    this.user = new User;

    if(this.cookie.get('logged')){
      this.user.ID = +this.cookie.get('userID');
      this.logged = true;
    }

    this.nbPersonsMax = 10;

    this.data.getList(this.level,"categories", this.token, categories => {
      this.categories = categories;
    });
    this.data.getList(this.level,"tags", this.token, tags => {
      this.tags = tags;
    });
  }

}
