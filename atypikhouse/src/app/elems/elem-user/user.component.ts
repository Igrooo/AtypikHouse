import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/logic/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  user : User;
  constructor() { }

  ngOnInit() {
  }

}
