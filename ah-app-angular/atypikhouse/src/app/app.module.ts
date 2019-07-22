import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeolocationService } from "./geolocation.service";
import { AppComponent } from './app.component';
import { DataService } from "./data.service";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
         MatToolbarModule, MatCardModule, MatSlideToggleModule } from '@angular/material';
import 'hammerjs';
import { ListComponent } from './list/list.component';
import { HouseComponent } from './house/house.component';
import {Routes, RouterModule} from "@angular/router";

const routes : Routes = [
  { path: '', component: ListComponent },
  { path: 'house', component: HouseComponent },
  { path: 'house/:id', component: HouseComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HouseComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
