import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { GeolocationService } from "./geolocation.service";
import { DataService } from "./data.service";
import { CookieService } from "ngx-cookie-service";
import { AgmCoreModule } from '@agm/core';

import { registerLocaleData, DatePipe } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { HttpClientModule } from "@angular/common/http";
import { Routes, ActivatedRoute, RouterModule } from "@angular/router";

import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSliderModule, MatAutocompleteModule,
         MatToolbarModule, MatCardModule, MatSlideToggleModule, MatSnackBarModule, MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule, MatSortModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table'; 
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog'; 
import { from } from 'rxjs';
import 'hammerjs';

import { FullCalendarModule } from '@fullcalendar/angular';

//const lang = 'fr';
//import { WordingUI } from 'src/data/lang/'+lang+'/ui';
//import { WordingTXT } from 'src/data/lang/'+lang+'/txt';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent }  from './aside/aside.component';

// Imports all pages
import { HomePage }       from './pages/page-home/home.component';
import { DemoPage }       from './pages/page-demo/demo.component';
import { DemoTypoPage }   from './pages/page-demo/demo-typo/demo-typo.component';
import { DemoIconsPage }  from './pages/page-demo/demo-icons/demo-icons.component';
import { ExternalPage }   from './pages/page-ext/ext.component';
import { AllPage }        from './pages/page-all/all.component';
import { CategoriesPage } from './pages/page-categories/categories.component';

import { AdminActivitiesComponent }     from './pages/page-admin/admin-activities/admin-activities.component';
import { AdminActivitiesTypeComponent } from './pages/page-admin/admin-activities-type/admin-activities-type.component';
import { AdminBookingComponent }        from './pages/page-admin/admin-booking/admin-booking.component';
import { AdminCategoriesComponent }     from './pages/page-admin/admin-categories/admin-categories.component';
import { AdminCommentsComponent }       from './pages/page-admin/admin-comments/admin-comments.component';
import { AdminHousesComponent }         from './pages/page-admin/admin-houses/admin-houses.component';
import { AdminPaymentsComponent }       from './pages/page-admin/admin-payments/admin-payments.component';
import { AdminPicsComponent }           from './pages/page-admin/admin-pics/admin-pics.component';
import { AdminPostsComponent }          from './pages/page-admin/admin-posts/admin-posts.component';
import { AdminTagsComponent }           from './pages/page-admin/admin-tags/admin-tags.component';
import { AdminUsersComponent }          from './pages/page-admin/admin-users/admin-users.component';

//import all elems
import { HouseComponent }               from './elems/elem-house/house.component';
import { ActivityComponent }            from './elems/elem-activity/activity.component';
import { BookingComponent }             from './elems/elem-booking/booking.component';
import { CategoryComponent }            from './elems/elem-category/category.component';
import { CommentComponent }             from './elems/elem-comment/comment.component';
import { PaymentComponent }             from './elems/elem-payment/payment.component';
import { PicComponent }                 from './elems/elem-pic/pic.component';
import { PostComponent }                from './elems/elem-post/post.component';
import { TagComponent }                 from './elems/elem-tag/tag.component';
import { UserComponent }                from './elems/elem-user/user.component';
import { ListComponent }                from './elems/elem-list/list.component';
import { ListHouseComponent }           from './elems/elem-list/list-house/list-house.component';
import { ListActivityComponent }        from './elems/elem-list/list-activity/list-activity.component';
import { ListBookingComponent }         from './elems/elem-list/list-booking/list-booking.component';
import { ListCategoryComponent }        from './elems/elem-list/list-category/list-category.component';
import { ListCommentComponent }         from './elems/elem-list/list-comment/list-comment.component';
import { ListPicComponent }             from './elems/elem-list/list-pic/list-pic.component';
import { ListPostComponent }            from './elems/elem-list/list-post/list-post.component';
import { ListPromoteComponent }         from './elems/elem-list/list-promote/list-promote.component';
import { ListTagComponent }             from './elems/elem-list/list-tag/list-tag.component';
import { ListUserComponent }            from './elems/elem-list/list-user/list-user.component';
import { FormHouseComponent }           from './elems/elem-form/form-house/form-house.component';
import { FormCategoryComponent }        from './elems/elem-form/form-category/form-category.component';
import { FormActivityComponent }        from './elems/elem-form/form-activity/form-activity.component';
import { FormTagComponent }             from './elems/elem-form/form-tag/form-tag.component';
import { FormBookingComponent }         from './elems/elem-form/form-booking/form-booking.component';
import { FormCommentComponent }         from './elems/elem-form/form-comment/form-comment.component';
import { FormPostComponent }            from './elems/elem-form/form-post/form-post.component';
import { FormPicComponent }             from './elems/elem-form/form-pic/form-pic.component';
import { FormUserComponent }            from './elems/elem-form/form-user/form-user.component';
import { FormLoginComponent }           from './elems/elem-form/form-login/form-login.component';
import { FormSignupComponent }          from './elems/elem-form/form-signup/form-signup.component';
import { IconComponent }                from './elems/elem-icon/icon.component';
import { MapComponent }                 from './elems/elem-map/map.component';
import { BookingCalendarComponent }     from './elems/elem-booking-calendar/booking-calendar.component';

const routes : Routes = [

  ////// BOOTSTRAPED PAGES (HOME,CATEGORIES)

  /**** Global pages ****/
  { path: '',             component: HomePage },             // Home
  { path: 'admin',        component: HomePage },             // Home
  //{ path: 'demo',       component: DemoPage },           // Angular Material components base
  //{ path: 'demo-typo',  component: DemoTypoPage },       // Fonts components base
  //{ path: 'demo-icons', component: DemoIconsPage },      // AtypikHouse icons base
  //{ path: 'all',        component: AllPage },            // AtypikHouse components base
  { path: 'categories', component: CategoriesPage },     // List all categories, all activities, all tags
//
  { path: 'login',      component: FormLoginComponent },
  { path: 'signup',     component: FormSignupComponent },
  { path: 'logged',     component: HomePage },
  { path: 'logout',     component: HomePage },
//
  //////// ONE ELEMENT PAGES (LISTS)
//
  ////List Pages (add search module in this ?)
  { path: 'houses',       component: ListComponent },         // List all houses (search result page)
  { path: 'category/:id', component: CategoryComponent },     // List all houses of category
  { path: 'activity/:id', component: ActivityComponent },     // List all houses of activity
  { path: 'tag/:id',      component: TagComponent },          // List all houses of tag
//
  { path: 'activities',   component: ListActivityComponent },   // List activities
  { path: 'users',        component: ListUserComponent },       // List users
  { path: 'tags',         component: ListTagComponent },        // List tags

  ///**** Users pages - Need connected ****/
  { path: 'house/:id/posts', component: ListPostComponent },    // List posts of an house (userFrom & userTo)
//
  ////Locataires pages
  { path: 'user/:id/bookings',  component: ListBookingComponent },  // List booking of an user
  //
  ////Loueurs pages
  { path: 'user/:id/houses',    component: ListHouseComponent },    // List houses of an user
  { path: 'house/:id/bookings', component: ListBookingComponent },  // List booking of an house
  { path: 'house/:id/comments', component: ListCommentComponent },  // List comments of a house
//
  //
  //////// ONE ELEMENT PAGES (FORMS)
//
  { path: 'house',          component: FormHouseComponent },        // New  house
  { path: 'house/:id',      component: HouseComponent },            // Show house
  { path: 'house/:id/edit', component: FormHouseComponent },        // Edit house

  { path: 'category', component: FormCategoryComponent },           // New  category
  { path: 'category/:id/edit', component: FormCategoryComponent },  // Edit category

  { path: 'activity', component: FormActivityComponent },           // New  activity
  { path: 'activity/:id/edit', component: FormActivityComponent },  // Edit activity

  { path: 'tag', component: FormTagComponent },                     // New  tag
  { path: 'tag/:id/edit', component: FormTagComponent },            // Edit tag

  { path: 'booking', component: FormBookingComponent },             // New  booking
  { path: 'booking/:id', component: BookingComponent },             // Show Booking
  { path: 'payment/:id', component: PaymentComponent },             // Show payment detail of a booking
  
  { path: 'booking/:id/comment', component: FormCommentComponent },          // New  comment
  { path: 'booking/:id/comment/:id', component: CommentComponent },          // Show commment
  { path: 'booking/:id/comment/:id/edit', component: FormCommentComponent }, // Edit comment

  { path: 'house/:id/post', component: FormPostComponent },          // New  post
  { path: 'house/:id/post/:id/edit', component: FormPostComponent }, // Edit post

  { path: 'house/:id/pic',          component: FormPicComponent },   // New  pic
  { path: 'house/:id/Pic/:id/edit', component: FormPicComponent },   // Edit pic

  { path: 'user', component: FormUserComponent },                    // New  user
  { path: 'user/:id', component: UserComponent },                    // Show user
  { path: 'user/:id/edit', component: FormUserComponent },           // Edit user

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
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    HomePage,
    ExternalPage,
    AllPage,
    DemoPage,
    DemoTypoPage,
    DemoIconsPage,
    CategoriesPage,
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
    ListHouseComponent,
    ListComponent,
    ListActivityComponent,
    ListBookingComponent,
    ListCategoryComponent,
    ListTagComponent,
    ListCommentComponent,
    ListPostComponent,
    ListPicComponent,
    ListUserComponent,
    ListPromoteComponent,
    FormHouseComponent,
    FormCategoryComponent,
    FormActivityComponent,
    FormTagComponent,
    FormBookingComponent,
    FormCommentComponent,
    FormPostComponent,
    FormPicComponent,
    FormUserComponent,
    IconComponent,
    MapComponent,
    FormLoginComponent,
    FormSignupComponent,
    AdminActivitiesComponent,
    AdminActivitiesTypeComponent,
    AdminBookingComponent,
    AdminCategoriesComponent,
    AdminCommentsComponent,
    AdminHousesComponent,
    AdminPaymentsComponent,
    AdminPicsComponent,
    AdminPostsComponent,
    AdminTagsComponent,
    AdminUsersComponent,
    BookingCalendarComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule, HttpClientModule,
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSliderModule, MatAutocompleteModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule, MatSnackBarModule, MatMenuModule, MatTabsModule, MatSortModule, MatTableModule, MatBadgeModule,
    MatNativeDateModule, MatDatepickerModule, MatDialogModule,
    FullCalendarModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDJkhTc18Nb6YHAcn6czC5yFemUkLlODEw'
    })
  ],
  entryComponents: [
    BookingCalendarComponent
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr' },
    DatePipe,
    GeolocationService,
    DataService,
    CookieService,
    MatDatepickerModule,
    FormBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
