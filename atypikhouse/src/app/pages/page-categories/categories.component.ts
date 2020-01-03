import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  template: 
  '<section class="ah-section ah-container-primary lead"><h2 class="ah-title">Les types d\'hébergements</h2><app-list-category></app-list-category></section>'+
  '<section class="ah-section ah-container-primary"><h2 class="ah-title ah-title-separator important"><span class="ah-title-text"><i class="ah-title-icon-left la la-leaf"></i>Les thématiques<i class="ah-title-icon-right la la-leaf"></i></span></h2><app-list-tag tagGroupFilter="0"></app-list-tag></section>'+
  '<section class="ah-section ah-container-primary"><h2 class="ah-title ah-title-separator important"><span class="ah-title-text"><i class="ah-title-icon-left la la-leaf"></i>Les services & équipements<i class="ah-title-icon-right la la-leaf"></i></span></h2><app-list-tag tagGroupFilter="1"></app-list-tag></section>'
})

export class CategoriesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}