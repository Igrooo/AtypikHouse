import { Component, OnInit, Inject } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { MatSnackBar } from "@angular/material";
import { User } from "src/app/logic/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public title:string = 'atypikhouse';
  public href:string = "";
  public pageid:string = "";
  public page:string = "";
  public pagetype:string;
  public logged:boolean;
  private cookieLogged: boolean;

  user:     User;

  userType:string = 'none';

  constructor(private snackBar: MatSnackBar,
              private router: Router,
              private cookieService: CookieService
              ) {
                this.router.events.subscribe((event: Event) => {
                  if (event instanceof NavigationStart) {
                    this.cookieLogged = !!this.cookieService.get('logged');
                    if(this.cookieLogged == true){
                      this.logged = true;
                      this.pagetype = 'private';
                      console.log(this.pagetype);
                    }
                    else{
                      this.logged = false;
                      this.pagetype = 'public';
                      console.log(this.pagetype);
                    }
                  }
                  if (event instanceof NavigationEnd) {
                    this.href = window.location.pathname.substring(1); // remove '/'
                    //Reload page on login/logout
                    if(this.href == 'logged' || this.href == 'logout'){
                      window.location.href = '';
                    }
                    //Update pageid 
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
                    console.log('Current page: '+this.page);
                  }
                  if (event instanceof NavigationError) {
                      console.log(event.error);
                  }
                });
              }

  ngOnInit() {
    this.user = new User;
    if(this.cookieService.get('logged')){
      this.user.ID   = +this.cookieService.get('userID');
      this.user.type = +this.cookieService.get('userType');
      if(this.user.type == 1){
        this.userType = 'user';
      }
      else{
        this.userType = 'admin';
      }
    }

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
