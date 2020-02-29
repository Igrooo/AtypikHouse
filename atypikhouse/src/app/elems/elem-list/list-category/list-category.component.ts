import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { Category } from "src/app/logic/Category";
import { Icons } from "src/app/elems/elem-icon/icons-categories";

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html'
})
export class ListCategoryComponent implements OnInit {

  constructor(private data: DataService) { }

  level = 'public';
  token = 'public';

  categories: [Category];
  
  icons = Icons;
  iconsSet      :string = 'travel';
  iconsSize     :string = 'card';
  iconsColor    :string = '#ba9077';
  iconsBgFolder :string = 'categories';

  ngOnInit() {
    this.data.getList(this.level,"categories", this.token, categories => {
      this.categories = categories;
    })
  }

}
