import { Component, OnInit } from '@angular/core';
import { DataService} from "../data.service";
import { House } from "../logic/House";
import { Router } from "@angular/router";
import { GeolocationService } from "../geolocation.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  list: [House];

  constructor(private data: DataService,
              private router: Router,
              private geolocation: GeolocationService
              ) { }

  goDetails(house: House) {
    this.router.navigate(["/house", house._id]);
  }

  goMap(house: House) {
    const mapURL = this.geolocation.getMapLink(house.location);
    location.href = mapURL;
  }

  share(house: House) {
    if ('share' in navigator) {
      (navigator as any).share({
        title: house.name + ` - ` + house.place,
        text: house.desc,
        url: window.location.href
      }).then( () => console.log("shared")).catch( () =>  console.log("error sharing"));
    } else {
      const shareTxt = house.name + ` - ` + house.place + ` - ` + house.desc;
      const shareURL = `whatsapp://send?text=${encodeURIComponent(shareTxt)}`;
      location.href = shareURL;
    }
  }

  ngOnInit() {
    this.data.getList("houses", list => {
      this.list = list;
    })
  }

}
