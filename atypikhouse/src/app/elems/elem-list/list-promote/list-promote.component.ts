import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-promote',
  templateUrl: './list-promote.component.html',
  styles: []
})
export class ListPromoteComponent implements OnInit {

  listTitle: string;

  constructor() { }

  ngOnInit() {
    this.listTitle = 'Les plus beaux séjours';
  }

}
