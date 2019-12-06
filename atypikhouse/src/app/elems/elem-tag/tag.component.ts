import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tag',
  template: '<a class="ah-tag ah-tag-type-{{ tagType.toString() }} {{ tagWithIconClass }} {{ tagWithIconClass }}" [ngStyle]="styles()">{{ tagText }}</a>',
  styles: []
})
export class TagComponent implements OnInit {
  @Input() tagWithIcon:boolean = false;
  @Input() tagType:number  = 0;
  @Input() tagColor:string = "";
  @Input() tagText:string  = "";
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

  constructor() { }

  ngOnInit() {
    this.setClasses();
  }

}
