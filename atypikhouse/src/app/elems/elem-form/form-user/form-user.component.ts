import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/logic/User';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html'
})
export class FormUserComponent implements OnInit {

  @Input() user : User;

  constructor() { }

  ngOnInit() {
  }

}
