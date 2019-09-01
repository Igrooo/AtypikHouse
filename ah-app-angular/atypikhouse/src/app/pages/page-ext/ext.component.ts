import { Component, OnInit } from '@angular/core';

// EXT Server URL for external pages
const EXTsecure:string  = ""; // s > activate https
const EXTdomain:string  = "localhost";
const EXTport:string    = "8888";

const EXTurl:string     = "http"+EXTsecure+"://"+EXTdomain+":"+EXTport;
const EXTpage:string    = "";

const EXTiframe:string  = '<iframe src="'+EXTurl+EXTpage+'"></iframe>';

@Component({
  selector: 'app-ext',
  styles:   ['iframe{width: 100%; height:100%;border:none}'],
  template: EXTiframe
})

export class ExternalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
