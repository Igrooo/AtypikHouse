import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.less']
})
export class PageRegisterComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  signupForm = new FormGroup({
    email: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    password: new FormControl(''),
    verifPassword: new FormControl(''),
  });
 

  submit(){ 
    let body = this.signupForm.value;
    this.http.post("http://localhost:1407/signup", body).subscribe(response => console.log(response)); 
  }


}
