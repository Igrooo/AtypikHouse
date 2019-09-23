import * as $ from 'jquery';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styles: []
})
export class IconComponent implements OnInit, OnChanges {
  iconsType:string             = 'svg';
  @Input() iconCircle:boolean  = false;
  @Input() iconsSet:string     ;
  @Input() iconSize:string     ;
  @Input() iconGroup:string    ;
  @Input() iconName:string     ;
  @Input() iconBgFolder:string ;
  @Input() iconBg:string       ;
  @Input() iconColor:string    ;
  @Input() iconTitle:string    ;
  @Input() cardText:string     ;
  @Input() cardMarker:string   ;
  iconCircleClass:string       ='';
  iconBgNotFoundClass:string   ='';
  iconWithoutBgClass:string    ='';
  iconWithoutColorClass:string ='';
  cardWithTextClass:string     ='';
  cardWithMarkerClass:string   ='';

  constructor() { }

  imgExists(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
  }

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
      case 'houses':      this.iconBgFolder = 'data/static/img/houses/'
          break;
      case 'categories':  this.iconBgFolder = 'data/static/img/categories/'
          break;
      case 'themes':      this.iconBgFolder = 'data/static/img/themes/'
          break;
      case 'activities':  this.iconBgFolder = 'data/static/img/activities/'
          break;
      case 'users':       this.iconBgFolder = 'data/static/img/users/'
          break;
      default:            this.iconBgFolder = 'assets/img/bg/'
    }
  }
  setIconBg(){
    if(this.iconSize == 'banner'){
      this.iconBg = this.iconBg+'-banner';
    }
  }

  setClasses(){
    if(this.iconBg){
      this.imgExists('http://localhost:4200/'+this.iconBgFolder+this.iconBg+'.png', function(exists) {
        console.log(exists);
        if(exists == false){
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
  stylesCardContent(){
    if(this.iconColor && this.iconSize == 'banner'){
      return {'background-color': this.iconColor}
    }
  }
  stylesMarker(){
    if(this.iconColor){
      return {'background-color': this.iconColor}
    }
  }

  ngOnInit() {
    this.setIconsSet();
    this.setIconBgFolder();
  }
  counterOnChanger = 0; // only on second time of OnCange (when data is ready)
  ngOnChanges() {
    if(this.counterOnChanger == 1){
      this.setIconBg();
      this.setClasses();
      //console.log('iconsType: '+this.iconsType);
      //console.log('iconsSet: '+this.iconsSet);
      //console.log('iconBgFolder: '+this.iconBgFolder);
      //console.log('iconBg: '+this.iconBg);
      //console.log('iconColor: '+this.iconColor);
      //console.log('iconTitle: '+this.iconTitle);
      //console.log('cardText: '+this.cardText);
      //console.log('cardMarker: '+this.cardMarker);
      //console.log('iconCircleClass: '+this.iconCircleClass);
      //console.log('iconBgNotFoundClass: '+this.iconBgNotFoundClass);
      //console.log('iconWithoutBgClass: '+this.iconWithoutBgClass);
      //console.log('iconWithoutColorClass: '+this.iconWithoutColorClass);
      //console.log('cardWithTextClass: '+this.cardWithTextClass);
      //console.log('cardWithMarkerClass: '+this.cardWithMarkerClass);
      //console.log('---------------------------------');
    }
    this.counterOnChanger ++;
  }

}
