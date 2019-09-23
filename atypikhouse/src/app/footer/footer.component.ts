import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

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
