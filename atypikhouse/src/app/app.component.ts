import { Component } from '@angular/core';
import { MatSnackBar } from "@angular/material";
import { GeolocationService } from "src/app/geolocation.service";
import { Category } from "src/app/logic/Category";
import { Tag } from "src/app/logic/Tag";
declare const UIswitchTheme: any;
declare const UIswitchSidenav: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  public title: string = 'atypikhouse';
  public href: string = "";
  public pageid: string = "";
  public page: string = "";
  public openSearchbox: string = "";
  public randomBanner: number = Math.floor((Math.random() * 7) + 1);

  listSearchType: [Category];
  listSearchThema: [Tag];

  toggleTheme() {
    UIswitchTheme();
  }
  toggleSidenav() {
    UIswitchSidenav();
  }

  open(target:string){

  }
  login(){

  }
  searchbox(){

  }

  searchboxLocation(location){
    
  }

  constructor(private snackBar: MatSnackBar,
              private geolocation: GeolocationService,
              ) { }

  ngOnInit() {

    this.geolocation.requestLocation(location => {
      if (location) {
        this.searchboxLocation(location);
        console.log(location.latitude,location.longitude);
      }
    });

    this.href = window.location.pathname.substring(1); // remove '/'
    if(this.href == ''){
      this.pageid = 'home-'+this.title;
      this.page = 'home';
    }
    else{
      this.pageid = this.href.replace('/', '-');
      if(this.href.indexOf('/') != -1){
        this.page = this.href.substring(0,this.href.indexOf('/'));
      }
      else{
        this.page = this.pageid;
      }
    }
    if(this.page == 'home'){
      this.openSearchbox = 'open-searchbox'
    }else{

    }
    console.log('Current page: '+this.page);


    if ((navigator as any).standalone == false) {
      // This is an iOS device and we are in the browser
      this.snackBar.open("You can add this App to the Home Screen", "", {duration: 3000});
    }
    if ((navigator as any).standalone == undefined) {
      // It's not iOS
      if(window.matchMedia("display-mode: browser").matches) {
        // We are in the browser
        window.addEventListener("beforeinstallprompt", event => {
          event.preventDefault();
          const sb = this.snackBar.open("Do you want to install this App ?", "Install", {duration: 5000} );
          sb.onAction().subscribe( () => {
            (event as any).prompt();
            (event as any).userChoice.then( result => {
              if (result.outcome == "dismissed") {
                // TODO: Track no installation
              } else {
                // TODO: It was installed
              }
            });
          });
          return false;
        });
      }
    }
  }
}
