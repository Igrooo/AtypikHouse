import { Component, OnInit } from '@angular/core';
import { DataService} from "../data.service";
import { House } from "../logic/House";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  list: [House];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getList( list => {
      this.list = list;
    })
  }

}
