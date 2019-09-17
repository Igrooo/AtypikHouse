import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

// EXT Server URL for external pages
const EXTsecure:string  = ""; // s > activate https
const EXTdomain:string  = "localhost";
const EXTport:string    = "80";

const EXTroot:string    = "/www2/AtypikHouse/atypikhouse/";
const EXTfolder:string  = "src/data/ext/";
const EXTurl:string     = "http"+EXTsecure+"://"+EXTdomain+":"+EXTport+EXTroot+EXTfolder;

const EXTlist:string     = EXTurl+"ext.json";
const EXTlisttype:string = "json";

const EXTloader:string  = `<div id="app-ext-data" data-list="`+EXTlist+`" data-type="`+EXTlisttype+`" data-src="`+EXTurl+`"></div>`; 
//assets/js/script.js

@Component({
  selector: 'app-ext',
  styles:   [],
  template: EXTloader
})

export class ExternalPage implements OnInit {

  ngOnInit() {
  }

}
