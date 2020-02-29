import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService} from "src/app/data.service";
import { Category } from "src/app/logic/Category";
import { Icons } from "src/app/elems/elem-icon/icons-categories";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html'
})

export class CategoryComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private data: DataService
              ) { }
              
  routingSubscription: any;

  level = 'public';
  token = 'public';

  category: Category;
  listTitle: string;

  icons = Icons;
  iconsSet      :string = 'travel';
  iconsSize     :string = 'banner';
  iconsColor    :string = '#ba9077';
  iconsBgFolder :string = '';
  //iconsBgFolder :string = 'categories';


  ngOnInit() {
    this.category = new Category();
    
    this.routingSubscription =
      this.route.params.subscribe(params => {
        if(params["id"]) {
          this.data.get(this.level,"categories", params["id"], this.token, category => {
            if (category) {
              this.category = category;
              this.listTitle = 'Locations de '+ this.category.title;
            }
          });
        }
      });
  }

}
