import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: ['agm-map { height: 600px; }  @media screen and (max-width: 580px) { agm-map { height: 300px; } }']
})
export class MapComponent implements OnInit {

  @Input() latitude:number;
  @Input() longitude:number;

  @Input() markers = [];

  constructor() { }

  ngOnInit() {
  }

}
