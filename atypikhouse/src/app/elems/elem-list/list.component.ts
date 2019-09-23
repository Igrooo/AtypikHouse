import { Component, OnInit, Input } from '@angular/core';
import { DataService} from "src/app/data.service";
import { House } from "src/app/logic/House";
import { Router } from "@angular/router";
import { GeolocationService } from "src/app/geolocation.service";
import { Icons } from "src/app/elems/elem-icon/icons-categories"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  @Input() listTitle:string = 'Locations disponibles pour vos critères';
  @Input() filterCategory:number = 1;
  @Input() allCategories:boolean = true;

  math = Math;
  
  list: [House];

  icons =  Icons;
  iconsSet      :string = 'travel';
  iconsSize     :string = 'card';
  iconsColor    :string = '#9dc1bb';
  iconsBgFolder :string = 'houses';

  constructor(private data: DataService,
              private router: Router,
              private geolocation: GeolocationService
              ) { }

  goDetails(house: House) {
    this.router.navigate(["/house", house.ID]);
  }

  goMap(house: House) {
    const mapURL = this.geolocation.getMapLink(house.location);
    location.href = mapURL;
  }

  share(house: House) {
    if ('share' in navigator) {
      (navigator as any).share({
        title: house.title + ` - ` + house.city + "," + house.address,
        text: house.description,
        url: window.location.href
      }).then( () => console.log("shared")).catch( () =>  console.log("error sharing"));
    } else {
      const shareTxt = house.title + ` - ` + house.city + "," + house.address + ` - ` + house.description;
      const shareURL = `whatsapp://send?text=${encodeURIComponent(shareTxt)}`;
      location.href = shareURL;
    }
  }

  ngOnInit() {
    this.data.getList("showProducts", list => {
      this.list = list;
    })
  }

}
