import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  template: '<app-list-category></app-list-category><app-list-activity></app-list-activity><app-list-tag></app-list-tag>',
  styles: []
})

export class CategoriesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
