import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    
  ]
})
export class HomePage implements OnInit {

  constructor(private data : DataService) {}
  public users;
  public hidden;

  clickTest(){
    
    this.data.getList("categorie", (res)=> {
      this.users =  res.content;
    });

    this.hidden = true;

    console.log(this.hidden);

  }

  ngOnInit() {
   
  }

}
