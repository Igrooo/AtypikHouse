import * as $ from 'jquery';
import { Component, OnInit, Inject } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from "@angular/router";
import { MatSnackBar } from "@angular/material";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  public title: string = 'atypikhouse';
  public href: string = "";
  public pageid: string = "";
  public page: string = "";

  constructor(private snackBar: MatSnackBar,
              private router: Router) {

                this.router.events.subscribe((event: Event) => {
                if (event instanceof NavigationStart) {
                    // Show loading indicator
                }
                if (event instanceof NavigationEnd) {
                    // Hide loading indicator
                    //Update pageid 
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
                    console.log('Current page: '+this.page);
                }
                if (event instanceof NavigationError) {
                    // Hide loading indicator
                    // Present error to user
                    console.log(event.error);
                }
                });
              }

  ngOnInit() {

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
