import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { User } from 'src/app/logic/User';
import { DataService} from "src/app/data.service";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html'
})
export class FormUserComponent implements OnInit {

  constructor(private router: Router,
              private data: DataService,
              private cookie: CookieService
              ) { }

  level = 'user';
  token = this.cookie.get('token');

  @Input() user : User;
  @Input() signup:boolean = false;
  userPro:boolean = false;

  submit(){
    if(this.user.siret == null){
      this.user.siret = 0;
    }
    //signup
    if(this.signup){
      console.log(this.user);
      this.data.signup(this.user, insertID => {
        if (Number.isInteger(insertID)) {
          this.router.navigate(["/login"]);
        }
      });
    }
    //update
    else{
      this.data.save(this.level,"users", this.user, this.token, success => {
        if(success){
          this.router.navigate(["/user", this.user.ID]);
        }
      })
    }
  }

  ngOnInit() {
    //signup page
    if(this.user == undefined){
      this.user = new User;
    }
    //user page
    else{
      if(this.user.siret != 0){
        this.userPro = true;
      }
    }

  }

}
