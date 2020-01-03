import { Component, OnInit, Input } from '@angular/core';

import { DataService } from "src/app/data.service";
import { ActivityType } from "src/app/logic/ActivityType";

@Component({
  selector: 'app-tag',
  template: '<a routerLink="{{ tagUrl }}" class="ah-tag ah-tag-type-{{ tagType.toString() }} {{ tagWithIconClass }} {{ tagWithIconClass }}" [ngStyle]="styles()">{{ tagText }}</a>'
})
export class TagComponent implements OnInit {
  
  activityType: ActivityType;

  constructor(private data: DataService) { }

  @Input() tagWithIcon:boolean = false;
  @Input() tagType:number  = 0;
  @Input() tagColor:string = "";
  @Input() tagText:string  = "";
  @Input() tagUrl:string   = "#";
  @Input() tagID:number    = 0;
  tagWithIconClass:string  = "";
  tagWithColorClass:string = "";
  
  setClasses(){
    if(this.tagColor) {
      this.tagWithColorClass ='tag-with-color';
    }
    if(this.tagWithIcon){
      this.tagWithIconClass = 'tag-icon';
    }
  }
  styles(){
    if(this.tagColor) {
      return {'background-color': this.tagColor};
    }
  }

  // set text for activities_type title display like a tag
  setText(ID){
    this.data.get("activities_types", ID, activityType => {
      this.tagText = activityType.title;
    });
  }

  ngOnInit() {
    this.activityType = new ActivityType();
    if(this.tagID != 0){
      this.setText(this.tagID);
    }
    this.setClasses();
    this.styles();
  }
}
