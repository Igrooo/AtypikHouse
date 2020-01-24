import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";
import { User } from 'src/app/logic/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  user : User;
  constructor(private data: DataService,
    private cookieService: CookieService
    ) { }

  ngOnInit() {
    
    this.user = new User;
    if(this.cookieService.get('logged')){
      this.user.ID = +this.cookieService.get('userID');
      this.data.get("users", this.user.ID.toString(), user => {
        if (user) {
          this.user = user;
        }
      });
    }
    
  }
}
