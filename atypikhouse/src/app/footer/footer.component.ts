import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

    // jQuery scripts for UI
    UItoggleTheme(){
      if($('body').hasClass('ah-theme-dark')){
        $('meta[name="theme-color"]').attr('content', 'light');
        $('body').removeClass('ah-theme-dark').addClass('ah-theme-light');
      }
      else{
        $('meta[name="theme-color"]').attr('content', 'dark');
        $('body').removeClass('ah-theme-light').addClass('ah-theme-dark');
      }
    }

  ngOnInit() {
    /*
    $(() => {
      $('#footer').scroll(() => {
        console.log('scroll');
        if($('#footer').scrollTop() + $('#footer').innerHeight() >= $('#footer')[0].scrollHeight) {
            console.log('end reached');
        }
      });
    });
    */
  }

}
