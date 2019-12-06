import { Component, OnInit, Input } from '@angular/core';
import { DataService} from "src/app/data.service";
import { Tag } from "src/app/logic/Tag";

@Component({
  selector: 'app-list-tag',
  templateUrl: './list-tag.component.html',
  styles: []
})
export class ListTagComponent implements OnInit {
  @Input() tagGroupFilter:number;

  tags: [Tag];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getList("tags", tags => {
      this.tags = tags;
    });
    
  }

}
