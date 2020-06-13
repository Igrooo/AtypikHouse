import { Component, OnInit } from '@angular/core';
import { Activity } from "src/app/logic/Activity";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html'
})

export class ActivityComponent implements OnInit {
  
  constructor() { }
  
  activity: Activity;

  ngOnInit() {
  }


}
