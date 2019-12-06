import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { Category } from "src/app/logic/Category";
import { Icons } from "src/app/elems/elem-icon/icons-categories";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styles: []
})
export class ListCategoryComponent implements OnInit {
  list: [Category];
  
  icons = Icons;
  iconsSet      :string = 'travel';
  iconsSize     :string = 'card';
  iconsColor    :string = '#ba9077';
  iconsBgFolder :string = 'categories';

  constructor(private data: DataService
    ) { }

  ngOnInit() {
    this.data.getList("categories", list => {
      this.list = list;
    })
  }

}
