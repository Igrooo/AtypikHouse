import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  constructor( private cookieService: CookieService) { }

  // jQuery scripts for UI
  UItoggleTheme(){
    if($('body').hasClass('ah-theme-dark')){
      this.cookieService.set('userTheme','light');
    }
    else{
      this.cookieService.set('userTheme','dark');
    }
    let userTheme = this.cookieService.get('userTheme');
      $('meta[name="theme-color"]').attr('content', userTheme);
      $('body').removeClass('ah-theme-light ah-theme-dark').addClass('ah-theme-'+userTheme);
  }

  ngOnInit() {
    if(this.cookieService.get('userTheme')){
      let userTheme = this.cookieService.get('userTheme');
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
