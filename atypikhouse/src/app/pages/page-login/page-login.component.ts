import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from "@angular/forms";
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.less']
})
export class PageLoginComponent implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
 

  submit(){ 
    let body = this.loginForm.value;
    this.http.post("http://localhost:1407/login", body).subscribe(response => console.log(response)); 
  }
}
