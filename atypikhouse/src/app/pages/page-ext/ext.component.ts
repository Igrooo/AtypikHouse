import { Component, OnInit } from '@angular/core';

// EXT Server URL for external pages
const EXTsecure:string  = ""; // s > activate https
const EXTdomain:string  = "localhost";
const EXTport:string    = "8888";

const EXTroot:string    = "/AtypikHouse/atypikhouse/";
const EXTfofder:string  = "src/data/ext/";
const EXTmodule:string  = "wordpress/";

const EXTurl:string     = "http"+EXTsecure+"://"+EXTdomain+":"+EXTport+EXTroot+EXTfofder+EXTmodule;

const EXTpage:string    = "news";

const EXTiframe:string  = '<iframe src="'+EXTurl+EXTpage+'"></iframe>';

@Component({
  selector: 'app-ext',
  styles:   ['iframe{width:100%;height:100%;border:none}'],
  template: EXTiframe
})

export class ExternalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
