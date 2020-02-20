import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

// EXT Server URL for external pages
const EXTsecure:string  = ""; // s > activate https
const EXTdomain:string  = "37.59.61.46";
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
    $(() => {
      // jQuery scripts for DATA
      // Load external data
      if($('#app-ext-data').length){
          var datasrc  = $('#app-ext-data').attr('data-src');
          var datafile = $('#app-ext-data').attr('data-list');
          var datatype = $('#app-ext-data').attr('data-type');
      
          //console.log('get '+datafile);
      
          var datapage = window.location.pathname;
      
          $.ajax({
            dataType: datatype,
            url: datafile,
            type: 'GET',
            data: { get_param: datapage },
            success: function (data) {
              $.each(data, function (index, data) {
                if('/'+index.toString() === datapage){
                  var datasource = datasrc+data+datapage;
                  //('load '+datapage+' of '+data);
                  $( '#app-ext-data' ).load( datasource+' #ah-ext-content' );
                  $( '.ah-container-main' ).removeClass('ah-loading');
                }
              })
            },
            error: function (xhr, error) {
              //console.log('error load '+datafile, xhr, error);
            }
          });
      }else{
          $( '.ah-container-main' ).removeClass('ah-loading');
      }
    });
  }

}
