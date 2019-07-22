import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.less']
})
export class HouseComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  routingSubscription: any;

  ngOnInit() {
    this.routingSubscription =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
      })
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
