import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/logic/Tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less']
})
export class TagComponent implements OnInit {
  tag: Tag;
  
  constructor() { }

  ngOnInit() {
  }

}
