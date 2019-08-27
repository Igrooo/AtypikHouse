import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeolocationService } from "./geolocation.service";
import { AppComponent } from './app.component';
import { DataService } from "./data.service";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSliderModule,
         MatToolbarModule, MatCardModule, MatSlideToggleModule, MatSnackBarModule } from '@angular/material';
import 'hammerjs';

import { Routes, RouterModule } from "@angular/router";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ListComponent } from './list/list.component';
import { HouseComponent } from './house/house.component';
import { ActivityComponent } from './activity/activity.component';
import { BookingComponent } from './booking/booking.component';
import { CategoryComponent } from './category/category.component';
import { CommentComponent } from './comment/comment.component';
import { PaymentComponent } from './payment/payment.component';
import { PicComponent } from './pic/pic.component';
import { PostComponent } from './post/post.component';
import { TagComponent } from './tag/tag.component';
import { UserComponent } from './user/user.component';
import { FormHouseComponent } from './form/form-house/form-house.component';
import { ListCategoryComponent } from './list/list-category/list-category.component';

const routes : Routes = [
  { path: '', component: ListComponent },
  { path: 'house', component: FormHouseComponent }, // new
  { path: 'house/:id', component: HouseComponent },
  { path: 'house/:id/edit', component: FormHouseComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HouseComponent,
    ActivityComponent,
    BookingComponent,
    CategoryComponent,
    CommentComponent,
    PaymentComponent,
    PicComponent,
    PostComponent,
    TagComponent,
    UserComponent,
    FormHouseComponent,
    ListCategoryComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule, HttpClientModule,
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule, MatSnackBarModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
