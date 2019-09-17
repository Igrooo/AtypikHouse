import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { House } from "src/app/logic/House";
import { Router } from "@angular/router";
import { GeolocationService } from "src/app/geolocation.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {

  list: [House];

  constructor(private data: DataService,
              private router: Router,
              private geolocation: GeolocationService
              ) { }

  goDetails(house: House) {
    this.router.navigate(["/house", house.id]);
  }

  goMap(house: House) {
    const mapURL = this.geolocation.getMapLink(house.location);
    location.href = mapURL;
  }

  share(house: House) {
    if ('share' in navigator) {
      (navigator as any).share({
        title: house.title + ` - ` + house.city + "," + house.address,
        text: house.desc,
        url: window.location.href
      }).then( () => console.log("shared")).catch( () =>  console.log("error sharing"));
    } else {
      const shareTxt = house.title + ` - ` + house.city + "," + house.address + ` - ` + house.desc;
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
