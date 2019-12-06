import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService} from "src/app/data.service";
import { Category } from "src/app/logic/Category";
import { Icons } from "src/app/elems/elem-icon/icons-categories";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: []
})

export class CategoryComponent implements OnInit {

  category: Category;
  listTitle: string;

  icons = Icons;
  iconsSet      :string = 'travel';
  iconsSize     :string = 'banner';
  iconsColor    :string = '#ba9077';
  iconsBgFolder :string = '';
  //iconsBgFolder :string = 'categories';

  constructor(private route: ActivatedRoute,
              private data: DataService
              ) { }

  routingSubscription: any;

  ngOnInit() {
    this.category = new Category();
    
    this.routingSubscription =
      this.route.params.subscribe(params => {
        if(params["id"]) {
          this.data.get("categories", params["id"], category => {
            if (category) {
              this.category = category;
              this.listTitle = 'Locations de '+ this.category.title;
            }
          });
        }
      });
  }

}
