import { Component, OnInit } from '@angular/core';
import { Category } from "../../logic/Category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})

export class CategoryComponent implements OnInit {
  category: Category;

  constructor() { }

  ngOnInit() {
  }

}
