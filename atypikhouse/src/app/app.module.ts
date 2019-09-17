import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeolocationService } from "./geolocation.service";
import { AppComponent } from './app.component';
import { DataService } from "./data.service";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSliderModule, MatAutocomplete,
         MatToolbarModule, MatCardModule, MatSlideToggleModule, MatSnackBarModule } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge'; 
import 'hammerjs';

import { Routes, RouterModule } from "@angular/router";

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

//const lang = 'fr';

//import { WordingUI } from 'src/data/lang/'+lang+'/ui';
//import { WordingTXT } from 'src/data/lang/'+lang+'/txt';

// Imports all pages
import { HomePage }       from './pages/page-home/home.component';
import { DemoPage }       from './pages/page-demo/demo.component';
import { DemoTypoPage }   from './pages/page-demo/demo-typo/demo-typo.component';
import { DemoIconsPage }  from './pages/page-demo/demo-icons/demo-icons.component';
import { ExternalPage }   from './pages/page-ext/ext.component';
import { AllPage }        from './pages/page-all/all.component';

//import all elems
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

const routes : Routes = [

  ////// BOOTSTRAPED PAGES (HOME)

  /**** Global pages ****/
  { path: '', component: HomePage },                           // Home
  { path: 'demo', component: DemoPage },                       // Angular Material components base
  { path: 'demo-typo', component: DemoTypoPage },              // Fonts components base
  { path: 'demo-icons', component: DemoIconsPage },            // AtypikHouse icons base
  { path: 'all', component: AllPage },                         // AtypikHouse components base


  ////// ONE ELEMENT PAGES (LISTS)

  //List Pages (add search module in this ?)
  { path: 'houses', component: ListComponent },                    // List all houses
  { path: 'category/:id', component: ListComponent },              // List all houses of category
  { path: 'activity/:id', component: ListComponent },              // List all houses of activity
  { path: 'tag/:id', component: ListComponent },                   // List all houses of tag

  { path: 'categories', component: ListCategoryComponent },          // List categories
  { path: 'activities', component: ListActivityComponent },          // List activities
  //{ path: 'users', component: ListUserComponent },                   // List users
  { path: 'tags', component: ListTagComponent },                     // List tags

  /**** Users pages - Need connected ****/
  { path: 'house/:id/posts', component: ListPostComponent },      // List posts of an house (userFrom & userTo)

  //Locataires pages
  //{ path: 'user/:id/bookings', component: BookingsPage },    // List booking of an user
  
  //Loueurs pages
  //{ path: 'user/:id/houses', component: ListComponent },        // List houses of an user
  //{ path: 'house/:id/bookings', component: BookingsPage },   // List booking of an house
  //{ path: 'house/:id/comments', component: CommentsPage },   // List comments of a house

  
  ////// ONE ELEMENT PAGES (FORMS)

  { path: 'house', component: FormHouseComponent },                 // New  house
  { path: 'house/:id', component: HouseComponent },                 // Show house
  { path: 'house/:id/edit', component: FormHouseComponent },        // Edit house

  //{ path: 'category', component: FormCategoryComponent },           // New  category
  //{ path: 'category/:id/edit', component: FormCategoryComponent },  // Edit category

  //{ path: 'activity', component: FormActivityComponent },           // New  activity
  //{ path: 'activity/:id/edit', component: FormActivityComponent },  // Edit activity

  //{ path: 'tag', component: FormTagComponent },                     // New  tag
  //{ path: 'tag/:id/edit', component: FormTagComponent },            // Edit tag

  //{ path: 'booking', component: FormBookingComponent },             // New  booking
  //{ path: 'booking/:id', component: BookingComponent },             // Show Booking
  //{ path: 'payment/:id', component: PaymentComponent },             // Show payment detail of a booking
  
  //{ path: 'booking/:id/comment', component: FormCommentComponent },          // New  comment
  //{ path: 'booking/:id/comment/:id', component: CommentComponent },          // Show commment
  //{ path: 'booking/:id/comment/:id/edit', component: FormCommentComponent }, // Edit comment

  //{ path: 'house/:id/post', component: FormPostComponent },          // New  post
  //{ path: 'house/:id/post/:id/edit', component: FormPostComponent }, // Edit post

  { path: 'house/:id/pic', component: FormPicComponent },            // New  pic
  { path: 'house/:id/Pic/:id/edit', component: FormPicComponent },   // Edit pic

  //{ path: 'user', component: FormUserComponent },                    // New  user
  //{ path: 'user/:id', component: UserComponent },                    // Show user
  //{ path: 'user/:id/edit', component: FormUserComponent },           // Edit user

    // Redirect to editorial content
    {path: 'faq',     component: ExternalPage},
    {path: 'support', component: ExternalPage},
    {path: 'news',    component: ExternalPage},
    {path: 'cgu',     component: ExternalPage},
    {path: 'about',   component: ExternalPage},
    {path: 'help',    redirectTo:'faq'},
    {path: 'blog',    redirectTo:'news'},
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ExternalPage,
    AllPage,
    DemoPage,
    DemoTypoPage,
    DemoIconsPage,
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
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule, HttpClientModule,
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSliderModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule, MatSnackBarModule, MatBadgeModule
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
