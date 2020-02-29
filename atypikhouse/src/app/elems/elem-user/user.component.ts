import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationError } from "@angular/router";
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { User } from 'src/app/logic/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  constructor(private data: DataService,
              private cookieService: CookieService,
              private router: Router
              ) {
                this.router.events.subscribe((event: Event) => {
                  if (event instanceof NavigationEnd) {
                    let href = window.location.pathname;
                    if(href == '/user/edit'){
                      this.edit = true;
                    }
                    else{
                      this.edit = false;
                    }
                  }
                  if (event instanceof NavigationError) {
                    console.log(event.error);
                  }
                });
              }
  
  level = 'user';
  token = this.cookieService.get('token');

  user : User;
  userPro:boolean = false;
  edit:boolean = false;

  ngOnInit() {
    this.user = new User;
    if(this.cookieService.get('logged')){
      this.user.ID = +this.cookieService.get('userID');
      this.data.get(this.level,"users", this.user.ID.toString(), this.token, user => {
        if (user) {
          this.user = user;
          if(this.user.siret != 0){
            this.userPro = true;
          }
        }
      });
    }


    
  }
}
