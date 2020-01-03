import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DataService } from "src/app/data.service";
import { User } from "src/app/logic/User";

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html'
})
export class FormLoginComponent implements OnInit {
  user: User;
  userForm: FormGroup;

  get password() {
    return this.userForm.get("password");
  }

  get email() {
    return this.userForm.get("email");
  }

  constructor(
    private router: Router,
    private data: DataService,
    private fb: FormBuilder,
    private cookieService: CookieService
    ) { }

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
    this.data.login(this.user, user => {
      if (user) {
        this.cookieService.set('logged','true');
        this.cookieService.set('userID',user.ID);
        this.cookieService.set('userType',user.type);
        this.router.navigate(["/logged"]);
      }
    });
  }

  ngOnInit() {
    this.user = new User();
    this.createForm();
  }

}
