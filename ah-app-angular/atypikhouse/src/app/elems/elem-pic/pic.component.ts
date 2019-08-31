import { Component, OnInit } from '@angular/core';
import { Pic } from 'src/app/logic/Pic';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.less']
})
export class PicComponent implements OnInit {
  pic : Pic;

  constructor() { }

  ngOnInit() {
  }

}
