import { Component, OnInit, Input } from '@angular/core';
import { DataService} from "src/app/data.service";
import { Tag } from "src/app/logic/Tag";

@Component({
  selector: 'app-list-tag',
  templateUrl: './list-tag.component.html'
})
export class ListTagComponent implements OnInit {
  
  constructor(private data: DataService) { }

  level = 'public';
  token = 'public';
  
  @Input() tagGroupFilter:number;

  tags: [Tag];


  ngOnInit() {
    this.data.getList(this.level,"tags", this.token, tags => {
      this.tags = tags;
    });
  }
}
