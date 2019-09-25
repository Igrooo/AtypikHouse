import * as $ from 'jquery';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styles: []
})
export class IconComponent implements OnInit, OnChanges {
  iconsType = 'svg';
  @Input() iconsParams:any = {

  }
  iconsClass:any = {
    circle         : '',
    bgNotFound     : '',
    withoutBg      : '',
    withoutColor   : '',
    cardWithText   : '',
    cardWithMarker : '',
  }
  
  constructor() { }

  imgExists(url) {
    let exists:boolean;
    let img = new Image();
    img.src = url;
    img.onload = function() { exists = true };
    img.onerror = function() { exists = false };
    return exists;
  }

  setIconsSet(){
    this.iconsParams.set = 'assets/icons/travel-set/';
    /*
    switch (this.iconsParams.set) {
      case 'travel': this.iconsParams.set = 'assets/icons/travel-set/'
          break;
      default:       this.iconsParams.set = 'assets/icons/travel-set/'
    }*/
  }
  setIconBgFolder(){
    switch (this.iconsParams.bgFolder) {
      case 'placeholder': this.iconsParams.bgFolder = 'assets/img/bg/'
          break;
      case 'houses':      this.iconsParams.bgFolder = 'data/static/img/houses/'
          break;
      case 'categories':  this.iconsParams.bgFolder = 'data/static/img/categories/'
          break;
      case 'themes':      this.iconsParams.bgFolder = 'data/static/img/themes/'
          break;
      case 'activities':  this.iconsParams.bgFolder = 'data/static/img/activities/'
          break;
      case 'users':       this.iconsParams.bgFolder = 'data/static/img/users/'
          break;
      default:            this.iconsParams.bgFolder = 'assets/img/bg/'
    }
  }
  setIconBg(){
    if(this.iconsParams.size == 'banner'){
      this.iconsParams.bg = this.iconsParams.bg+'-banner';
    }
  }

  setClasses(){
    if(this.iconsParams.bg){
      if(this.imgExists('http://localhost:4200/'+this.iconsParams.bgFolder+this.iconsParams.bg+'.png') == false) {
        this.iconsClass.bgNotFound = 'icon-backg-not-found';
      }
    }
    else{
      this.iconsClass.withoutBg = 'icon-without-backg';
    }
    if(!this.iconsParams.color){
      this.iconsClass.withoutColor = 'icon-without-color';
    }
    if(this.iconsParams.circle){
      this.iconsClass.circle = 'circle';
    }
    if(this.iconsParams.cardText){
      this.iconsClass.cardWithText = 'card-with-text';
    }
    else{
      this.iconsClass.cardWithText = 'card-without-text';
    }
    if(this.iconsParams.cardMarker){
      this.iconsClass.cardWithMarker = 'card-with-marker';
    }
    else{
      this.iconsClass.cardWithMarker = 'card-without-marker';
    }
  }

  styles(){
    if(this.iconsClass.withoutBg != 'icon-without-backg' && this.iconsParams.color){
      return {'background-image': 'url('+this.iconsParams.bgFolder+this.iconsParams.bg+'.png)', 'background-color': this.iconsParams.color, 'border-color': this.iconsParams.color}
    }
    else if(this.iconsClass.withoutBg != 'icon-without-backg' && !this.iconsParams.color){
      return {'background-image': 'url('+this.iconsParams.bgFolder+this.iconsParams.bg+'.png)'}
    }
    else if(this.iconsParams.color){
      return {'background-color': this.iconsParams.color, 'border-color': this.iconsParams.color}
    }
  }
  stylesCardContent(){
    if(this.iconsParams.color && this.iconsParams.size == 'banner'){
      return {'background-color': this.iconsParams.color}
    }
  }
  stylesMarker(){
    if(this.iconsParams.color){
      return {'background-color': this.iconsParams.color}
    }
  }

  ngOnInit() {
    console.log(this.iconsParams);
    this.setIconsSet();
    this.setIconBgFolder();
  }

  counterOnChanges = 0; // OnChanges only on second time (when data is ready)
  ngOnChanges() {
    if(this.counterOnChanges == 1){
      this.setIconBg();
      this.setClasses();
    }
    this.counterOnChanges ++;
  }
}
