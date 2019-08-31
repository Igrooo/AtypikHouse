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

//import { WordingUI } from 'src/data/lang/'+lang+'/ui';
//import { WordingTXT } from 'src/data/lang/'+lang+'/txt';

import { HomePage }         from './pages/page-home/home.component';
import { DemoPage }         from './pages/page-demo/demo.component';
import { DemoTypoPage }     from './pages/page-demo/demo-typo/demo-typo.component';
import { AllPage }          from './pages/page-all/all.component';

//PHP Server URL for external pages
const PHPsecure:string = ""; // s > activate https
const PHPdomain:string = "localhost";
const PHPport:string = "8888";

const PHPurl:string = "http"+PHPsecure+"://"+PHPdomain+":"+PHPport;

//ON ELEMENT PAGES

const routes : Routes = [

  ////// BOOTSTRAPED PAGES
  
  /**** Global pages ****/
  { path: '', component: HomePage },                           // Home
  { path: 'demo', component: DemoPage },                       // Angular Material components base
  { path: 'demo-typo', component: DemoTypoPage },              // Fonts components base
  { path: 'all', component: AllPage },                         // AtypikHouse components base
  
  //List Pages (add search module in this ?)
  //{ path: 'houses', component: HousesPage },                 // List all houses
  //{ path: 'category/:id', component: CategoryPage },         // List all houses of category
  //{ path: 'activity/:id', component: ActivityPage },         // List all houses of activity
  //{ path: 'tag/:id', component: TagPage },                   // List all houses of tag

  //{ path: 'categories', component: CategoriesPage },         // List categories
  //{ path: 'activities', component: ActivitiesPage },         // List activities
  //{ path: 'users', component: UsersPage },                   // List users
  //{ path: 'tags', component: TagsPage },                     // List tags

  /**** Users pages - Need connected ****/
  //{ path: 'house/:id/posts', component: ListPostPage },      // List posts of an house (userFrom & userTo)

  //Locataires pages
  //{ path: 'user/:id/bookings', component: BookingsPage },    // List booking of an user
  
  //Loueurs pages
  //{ path: 'user/:id/houses', component: HousesPage },        // List houses of an user
  //{ path: 'house/:id/bookings', component: BookingsPage },   // List booking of an house
  //{ path: 'house/:id/comments', component: CommentsPage },   // List comments of a house


  ////// ONE ELEMENT PAGES (FORMS)

  //{ path: 'house', component: FormHouseComponent },                 // New  house
  //{ path: 'house/:id', component: HouseComponent },                 // Show house
  //{ path: 'house/:id/edit', component: FormHouseComponent },        // Edit house

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

  //{ path: 'house/:id/pic', component: FormPicComponent },            // New  pic
  //{ path: 'house/:id/Pic/:id/edit', component: FormPicComponent },   // Edit pic

  //{ path: 'user', component: FormUserComponent },                    // New  user
  //{ path: 'user/:id', component: UserComponent },                    // Show user
  //{ path: 'user/:id/edit', component: FormUserComponent },           // Edit user

    // Redirect to editorial content, faq, support...
    {path: 'blog',    redirectTo:PHPurl+'/AtypikHouse/ah-app-angular/atypikhouse/src/data/ext/wordpress', pathMatch:'full'},
    {path: 'faq',     redirectTo:'/login', pathMatch:'full'},
    {path: 'support', redirectTo:'/login', pathMatch:'full'},
  

];

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
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
