import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: ['agm-map { height: 600px; }']
})
export class MapComponent implements OnInit {

  @Input() latitude:number;
  @Input() longitude:number;

  @Input() markers = [];

  constructor() { }

  ngOnInit() {
  }

}
