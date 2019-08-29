import { Component, OnInit } from '@angular/core';
import { DataService} from "../../data.service";
import { Category } from "../../logic/Category";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.less']
})
export class ListCategoryComponent implements OnInit {

  list: [Category];

  constructor(private data: DataService
    ) { }

  ngOnInit() {
    this.data.getList("categories", list => {
      this.list = list;
    })
  }

}
