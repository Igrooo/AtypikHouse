import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent implements OnInit, OnChanges {

  constructor() { }

  iconsType:string             = 'svg';
  @Input() forceReload:boolean = false;
  @Input() iconCircle:boolean  = false;
  @Input() iconsSet:string     ;
  @Input() iconSize:string     ;
  @Input() iconGroup:string    ;
  @Input() iconName:string     ;
  @Input() iconBgFolder:string ;
  @Input() iconBg:string       ;
  @Input() iconColor:string    ;
  @Input() iconTitle:string    ;
  @Input() iconSubTitle:string ;
  @Input() cardText:string     ;
  @Input() cardMarker:string   ;
  iconCircleClass:string       = '';
  iconBgNotFoundClass:string   = '';
  iconWithoutBgClass:string    = '';
  iconWithoutColorClass:string = '';
  cardWithTextClass:string     = '';
  cardWithMarkerClass:string   = '';

  imgExists(url) {
    let exists:boolean;
    let img = new Image();
    img.src = url;
    img.onload  = () => { exists = true };
    img.onerror = () => { exists = false };
    return exists;
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
      default:            this.iconBgFolder =  this.iconBgFolder
    }
  }
  setIconBg(){
    if(this.iconSize == 'banner'){
      this.iconBg = this.iconBg+'-banner';
    }
  }

  setClasses(){
    if(this.iconBg){
      if(this.imgExists('http://37.59.61.46:4200/'+this.iconBgFolder+this.iconBg+'.png') == false) {
        console.log('background image http://37.59.61.46:4200/'+this.iconBgFolder+this.iconBg+'.png not found');
        this.iconBgNotFoundClass = 'icon-backg-not-found';
        this.iconWithoutBgClass = 'icon-without-backg';
      }
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
    this.setIconBg();
    this.setClasses();
  }
  
  counterOnChanges = 0; // OnChanges only on second time (when data is ready), or when force reload (first time before OnInit)
  ngOnChanges() {
    if(this.forceReload){
      this.counterOnChanges = 1;
    }
    if(this.counterOnChanges == 1){
      //this.setIconBg();
      //this.setClasses();
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
    this.counterOnChanges ++;
  }

}
