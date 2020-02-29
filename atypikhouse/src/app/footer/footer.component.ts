import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  constructor( private cookie: CookieService) { }

  // jQuery scripts for UI
  UItoggleTheme(){
    if($('body').hasClass('ah-theme-dark')){
      this.cookie.set('userTheme','light');
    }
    else{
      this.cookie.set('userTheme','dark');
    }
    let userTheme = this.cookie.get('userTheme');
      $('meta[name="theme-color"]').attr('content', userTheme);
      $('body').removeClass('ah-theme-light ah-theme-dark').addClass('ah-theme-'+userTheme);
  }

  ngOnInit() {
    if(this.cookie.get('userTheme')){
      let userTheme = this.cookie.get('userTheme');
      $('meta[name="theme-color"]').attr('content', userTheme);
      $('body').removeClass('ah-theme-light ah-theme-dark').addClass('ah-theme-'+userTheme);
    }
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
