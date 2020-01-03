import { Component, OnInit } from '@angular/core';
import { Pic } from 'src/app/logic/Pic';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html'
})
export class PicComponent implements OnInit {
  pic : Pic;

  constructor() { }

  ngOnInit() {
  }

}
