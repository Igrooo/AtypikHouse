import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { Category } from "src/app/logic/Category";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styles: []
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
