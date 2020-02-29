import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DataService } from "src/app/data.service";
import { User } from "src/app/logic/User";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html'
})
export class FormLoginComponent implements OnInit {
  
  constructor(private router: Router,
              private data: DataService,
              private fb: FormBuilder,
              private cookieService: CookieService
              ) { }

  user: User;
  userForm: FormGroup;

  get password() {
    return this.userForm.get("password");
  }

  get email() {
    return this.userForm.get("email");
  }

  createForm() {
      this.userForm = this.fb.group(
      {
        email: "",
        password: ""
      },
      { updateOn: "submit" }
      );
    }

  login() {
    this.user.email = this.userForm.value.email ;
    this.user.password = this.userForm.value.password ;
    this.data.login(this.user, credentials => {
      if (credentials) {
        this.user = credentials.user;
        let token = credentials.token;
        this.cookieService.set('logged',   'true');
        this.cookieService.set('userID',   this.user.ID.toString());
        this.cookieService.set('userType', this.user.type.toString());
        this.cookieService.set('token',    token);
        this.router.navigate(["/logged"]);
      }
    });
  }

  ngOnInit() {
    this.user = new User();
    this.createForm();
  }

}
