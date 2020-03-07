import { Component, OnInit, Input } from '@angular/core';
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
              private cookie: CookieService
              ) { }

  user: User;
  userForm: FormGroup;

  @Input() indialog:boolean = false;

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
        this.cookie.set('logged',   'true');
        this.cookie.set('userID',   this.user.ID.toString());
        this.cookie.set('userType', this.user.type.toString());
        this.cookie.set('token',    token);
        this.router.navigate(["/logged"]);
      }
    });
  }

  ngOnInit() {
    this.user = new User();
    this.createForm();
  }

}
