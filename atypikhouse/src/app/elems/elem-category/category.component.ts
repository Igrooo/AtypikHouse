import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService} from "src/app/data.service";
import { Category } from "src/app/logic/Category";

@Component({
  selector: 'app-category',
  template: '<app-list [listTitle]="" [filterCategory]="category.id"></app-list>',
  styles: []
})

export class CategoryComponent implements OnInit {
  category: Category;

  constructor(private route: ActivatedRoute,
              private data: DataService
              ) { }

  routingSubscription: any;

  ngOnInit() {

    this.category = new Category();

    this.routingSubscription =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
        if(params["id"]) {
          this.data.get("categorie", params["id"], response => {
            this.category = response;
          });
        }
      });
  }

}
