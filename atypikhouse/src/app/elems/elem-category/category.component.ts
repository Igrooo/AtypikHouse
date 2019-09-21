import { Component, OnInit } from '@angular/core';
import { Category } from "src/app/logic/Category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: []
})

export class CategoryComponent implements OnInit {
  category: Category;

  constructor() { }

  ngOnInit() {
  }

}
