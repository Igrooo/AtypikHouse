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

const lang = 'fr';

//import { WordingUI } from '../data/lang/'+lang+'/ui';
//import { WordingTXT } from '../data/lang/'+lang+'/txt';

//ELEMS
import { HouseComponent }        from './elems/elem-house/house.component';
import { ActivityComponent }     from './elems/elem-activity/activity.component';
import { BookingComponent }      from './elems/elem-booking/booking.component';
import { CategoryComponent }     from './elems/elem-category/category.component';
import { CommentComponent }      from './elems/elem-comment/comment.component';
import { PaymentComponent }      from './elems/elem-payment/payment.component';
import { PicComponent }          from './elems/elem-pic/pic.component';
import { PostComponent }         from './elems/elem-post/post.component';
import { TagComponent }          from './elems/elem-tag/tag.component';
import { UserComponent }         from './elems/elem-user/user.component';
import { ListComponent }         from './elems/elem-list/list.component';
import { ListCategoryComponent } from './elems/elem-list/list-category/list-category.component';
import { ListActivityComponent } from './elems/elem-list/list-activity/list-activity.component';
import { ListTagComponent }      from './elems/elem-list/list-tag/list-tag.component';
import { ListCommentComponent }  from './elems/elem-list/list-comment/list-comment.component';
import { ListPostComponent }     from './elems/elem-list/list-post/list-post.component';
import { ListPicComponent }      from './elems/elem-list/list-pic/list-pic.component';
import { ListUserComponent }     from './elems/elem-list/list-user/list-user.component';
import { FormHouseComponent }    from './elems/elem-form/form-house/form-house.component';
import { FormCategoryComponent } from './elems/elem-form/form-category/form-category.component';
import { FormActivityComponent } from './elems/elem-form/form-activity/form-activity.component';
import { FormTagComponent }      from './elems/elem-form/form-tag/form-tag.component';
import { FormBookingComponent }  from './elems/elem-form/form-booking/form-booking.component';
import { FormCommentComponent }  from './elems/elem-form/form-comment/form-comment.component';
import { FormPostComponent }     from './elems/elem-form/form-post/form-post.component';
import { FormPicComponent }      from './elems/elem-form/form-pic/form-pic.component';
import { FormUserComponent }     from './elems/elem-form/form-user/form-user.component';

//PAGES
import { HomePage }         from './pages/page-home/home.component';
import { DemoPage }         from './pages/page-demo/demo.component';
import { DemoTypoPage }     from './pages/page-demo/demo-typo/demo-typo.component';
import { AllPage }          from './pages/page-all/all.component';

const routes : Routes = [
  { path: '', component: HomePage },                           // Home

  { path: 'demo', component: DemoPage },                       // Angular Material components base
  { path: 'all', component: AllPage },                         // AtypikHouse components base

  { path: 'houses', component: ListComponent },                     // List houses
  { path: 'house', component: FormHouseComponent },                 // New  house
  { path: 'house/:id', component: HouseComponent },                 // Show house
  { path: 'house/:id/edit', component: FormHouseComponent },        // Edit house

  { path: 'categories', component: ListCategoryComponent },         // List categories
  { path: 'category', component: FormCategoryComponent },           // New  category
  { path: 'category/:id', component: CategoryComponent },           // List all houses of category
  { path: 'category/:id/edit', component: FormCategoryComponent },  // Edit category

  { path: 'activities', component: ListActivityComponent },         // List activities
  { path: 'activity', component: FormActivityComponent },           // New  activity
  { path: 'activity/:id', component: ActivityComponent },           // List all houses of activity
  { path: 'activity/:id/edit', component: FormActivityComponent },  // Edit activity

  { path: 'tags', component: ListTagComponent },                    // List tags
  { path: 'tag', component: FormTagComponent },                     // New  tag
  { path: 'tag/:id', component: TagComponent },                     // List all houses of tag
  { path: 'tag/:id/edit', component: FormTagComponent },            // Edit tag

  { path: 'booking', component: FormBookingComponent },             // New  booking
  { path: 'booking/:id', component: BookingComponent },             // Show Booking
  { path: 'payment/:id', component: PaymentComponent },             // Show payment detail of a booking

  { path: 'booking/:id/comments', component: ListCommentComponent },         // List comments of a booking
  { path: 'booking/:id/comment', component: FormCommentComponent },          // New  comment
  { path: 'booking/:id/comment/:id', component: CommentComponent },          // Show commment
  { path: 'booking/:id/comment/:id/edit', component: FormCommentComponent }, // Edit comment

  { path: 'house/:id/posts', component: ListPostComponent },         // List posts of an house
  { path: 'house/:id/post', component: FormPostComponent },          // New  post
  { path: 'house/:id/post/:id', component: PostComponent },          // Show post
  { path: 'house/:id/post/:id/edit', component: FormPostComponent }, // Edit post

  { path: 'house/:id/pics', component: ListPicComponent },           // List pics of an house
  { path: 'house/:id/pic', component: FormPicComponent },            // New  pic
  { path: 'house/:id/Pic/:id/edit', component: FormPicComponent },   // Edit pic

  { path: 'users', component: ListUserComponent },                   // List users
  { path: 'user', component: FormUserComponent },                    // New  user
  { path: 'user/:id', component: UserComponent },                    // Show user
  { path: 'user/:id/edit', component: FormUserComponent },           // Edit user
];

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
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
    ListComponent,
    ListCategoryComponent,
    ListActivityComponent,
    ListTagComponent,
    ListCommentComponent,
    ListPostComponent,
    ListPicComponent,
    ListUserComponent,
    FormHouseComponent,
    FormCategoryComponent,
    FormActivityComponent,
    FormTagComponent,
    FormBookingComponent,
    FormCommentComponent,
    FormPostComponent,
    FormPicComponent,
    FormUserComponent,
    AllPage,
    DemoPage,
    DemoTypoPage
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule, HttpClientModule,
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule, MatSnackBarModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
