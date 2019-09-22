import * as $ from 'jquery';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styles: []
})
export class IconComponent {
  @Input() iconsSet:string     = '';
  @Input() iconSize:string     = '';
  @Input() iconCircle:boolean  = false;
  @Input() iconGroup:string    = '';
  @Input() iconName:string     = '';
  @Input() iconBgFolder:string = '';
  @Input() iconBg:string       = '';
  @Input() iconColor:string    = '';
  @Input() iconTitle:string    = '';
  @Input() cardText:string     = '';
  @Input() cardMarker:string   = '';
  iconsType:string             = 'svg';
  iconCircleClass:string       = '';
  iconBgNotFoundClass:string   = '';
  iconWithoutBgClass:string    = '';
  iconWithoutColorClass:string = '';
  cardWithTextClass:string     = '';
  cardWithMarkerClass:string   = '';

  setIconsSet(){
    switch (this.iconsSet) {
      case 'travel': this.iconsSet = 'assets/icons/travel-set/'
          break;
      default:       this.iconsSet = 'assets/icons/travel-set/'
    }
  }
  setIconBgFolder(){
    switch (this.iconBgFolder) {
      case 'placeholder': this.iconBgFolder = 'assets/img/bg/'
          break;
      case 'houses':      this.iconBgFolder = 'src/data/static/img/houses/'
          break;
      case 'categories':  this.iconBgFolder = 'src/data/static/img/categories/'
          break;
      case 'themes':      this.iconBgFolder = 'src/data/static/img/themes/'
          break;
      case 'activities':  this.iconBgFolder = 'src/data/static/img/activities/'
          break;
      case 'users':       this.iconBgFolder = 'src/data/static/img/users/'
          break;
      default:            this.iconBgFolder = 'assets/img/bg/'
    }
  }

  setClasses(){
    if(this.iconBg){
      $.ajax({
        url: this.iconBgFolder+this.iconBg+'.png',
        type:'HEAD',
        error: () =>{
          this.iconBgNotFoundClass = 'icon-backg-not-found';
        }
      });
    }
    else{
      this.iconWithoutBgClass = 'icon-without-backg';
    }
    if(!this.iconColor){
      this.iconWithoutColorClass = 'icon-without-color';
    }
    if(this.iconCircle){
      this.iconCircleClass = 'circle';
    }
    if(this.cardText){
      this.cardWithTextClass = 'card-with-text';
    }
    else{
      this.cardWithTextClass = 'card-without-text';
    }
    if(this.cardMarker){
      this.cardWithMarkerClass = 'card-with-marker';
    }
    else{
      this.cardWithMarkerClass = 'card-without-marker';
    }
  }

  styles(){
    if(this.iconSize == 'banner'){
      this.iconBg = this.iconBg+'banner';
    }
    if(this.iconWithoutBgClass != 'icon-without-backg' && this.iconColor){
      return {'background-image': 'url('+this.iconBgFolder+this.iconBg+'.png)', 'background-color': this.iconColor, 'border-color': this.iconColor}
    }
    else if(this.iconWithoutBgClass != 'icon-without-backg' && !this.iconColor){
      return {'background-image': 'url('+this.iconBgFolder+this.iconBg+'.png)'}
    }
    else if(this.iconColor){
      return {'background-color': this.iconColor, 'border-color': this.iconColor}
    }
  }
  stylesMarker(){
    if(this.iconColor){
      return {'background-color': this.iconColor}
    }
  }

  constructor() { }

  ngOnInit() {
    console.log(this.iconCircle);
    console.log(this.cardMarker);
    this.setIconsSet();
    this.setIconBgFolder();
    this.setClasses();
  }

}
