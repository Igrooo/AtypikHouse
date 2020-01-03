import { Component, OnInit, Input } from '@angular/core';
import { DataService} from "src/app/data.service";
import { House } from "src/app/logic/House";
import { Router } from "@angular/router";
import { Icons } from "src/app/elems/elem-icon/icons-categories"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  @Input() listTitle:string = 'Locations disponibles pour vos critères';
  @Input() filterCategory:number = 0;

  math = Math;
  
  houses: [House];

  icons =  Icons;
  iconsSet      :string = 'travel';
  iconsSize     :string = 'card';
  iconsColor    :string = '#9dc1bb';
  iconsBgFolder :string = 'houses';

  constructor(private data: DataService,
              private router: Router
              ) { }
  ngOnInit() {
    this.icons = Icons;
    this.data.getList("houses", houses => {
      this.houses = houses;
    });
    //console.log('filterCategory: '+this.filterCategory);
  }

}
