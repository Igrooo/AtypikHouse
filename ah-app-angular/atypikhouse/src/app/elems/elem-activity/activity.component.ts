import { Component, OnInit } from '@angular/core';
import { Activity } from "../../logic/Activity";

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.less']
})

export class ActivityComponent implements OnInit {
  
  activity: Activity;

  constructor() { }

  ngOnInit() {
  }


}
