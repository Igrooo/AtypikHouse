import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { GeolocationService } from "src/app/geolocation.service";
import { Category } from "src/app/logic/Category";
import { Tag } from "src/app/logic/Tag";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  public randomBanner: number = Math.floor((Math.random() * 7) + 1);

  listSearchType: [Category];
  listSearchThema: [Tag];

  constructor(private geolocation: GeolocationService,
              private router: Router) { }

  // jQuery scripts for UI
  UItoggleTheme(){
    if($('body').hasClass('ah-theme-dark')){
      $('meta[name="theme-color"]').attr('content', 'light');
      $('body').removeClass('ah-theme-dark').addClass('ah-theme-light');
    }
    else{
      $('meta[name="theme-color"]').attr('content', 'dark');
      $('body').removeClass('ah-theme-light').addClass('ah-theme-dark');
    }
  }
  UItoggleSidenav(){
    $('#sidenav').toggleClass('open');
    $('#sidenav-cta').toggleClass('open');
    $('#searchbox, main, aside').toggleClass('sidenav-overlay');
  }

  open(target:string){

  }
  login(){

  }
  searchbox(){

  }

  searchboxLocation(location){
    
  }

  search(location:any, type:number, thema:number, dateStart:Date, dateEnd:Date, NbPers:number) {
    this.router.navigate(["/houses", location, type, thema, dateStart, dateEnd, NbPers]);
  }

  ngOnInit() {

    this.geolocation.requestLocation(location => {
      if (location) {
        this.searchboxLocation(location);
        console.log(location.latitude,location.longitude);
      }
    });

  }

}
