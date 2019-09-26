import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";

//const devmode:boolean = false;

//API Server URL 
const secure:string = ""; // s > activate https
const domain:string = "localhost";

// Production port  : 1407
// Development port : 3000 (server-backup with static .db file)
const port:string = "1407";

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) { }

  public endpoint = "http"+secure+"://"+domain+":"+port; 

  get(route:string, id: string, callback) {
    this.http.get(`${this.endpoint}/${route}/${id}`)
      .subscribe(response =>{
        //console.log('Get DATA : '+route);
        callback(response['content']);
      });
  }

  getList(route:string, callback) {
    this.http.get(`${this.endpoint}/${route}`)
      .subscribe(response => {
      //console.log('Get DATA list : '+route);
      callback(response['content']);
    });

  }

  save(route:string, elem, callback) {
    if (elem.ID) {
      // It's an update
      this.http.put(`${this.endpoint}/${route}/${elem.ID}`, elem)
        .subscribe(response => {
          callback(true);
        });
    } else {
      // It's an insert
      this.http.post(`${this.endpoint}/${route}`, elem)
        .subscribe(response => {
          callback(response['content']); //insertId
        });
    }
    callback(true);
  }
}

/*
export const APIroutes = {
  activity   : '',
  booking    : '',
  category   : 'categorie',
  comment    : '',
  house      : 'showProduct',
  payment    : '',
  pic        : '',
  post       : '',
  tag        : '',
  user       : '',
}
*/

  ////List Pages (add search module in this ?)
  //{ path: 'houses',       component: ListComponent },       // List all houses (search result page)
  //{ path: 'category/:id', component: CategoryComponent },   // List all houses of category
  //{ path: 'activity/:id', component: ActivityComponent },   // List all houses of activity
  //{ path: 'tag/:id',      component: TagComponent },        // List all houses of tag
//
  //{ path: 'activities',   component: ListActivityComponent },   // List activities
  ////{ path: 'users',      component: ListUserComponent },       // List users
  //{ path: 'tags',         component: ListTagComponent },        // List tags
//
  ///**** Users pages - Need connected ****/
  //{ path: 'house/:id/posts', component: ListPostComponent },    // List posts of an house (userFrom & userTo)
//
  ////Locataires pages
  ////{ path: 'user/:id/bookings',  component: BookingsPage },    // List booking of an user
  //
  ////Loueurs pages
  ////{ path: 'user/:id/houses',    component: ListComponent },  // List houses of an user
  ////{ path: 'house/:id/bookings', component: BookingsPage },   // List booking of an house
  ////{ path: 'house/:id/comments', component: CommentsPage },   // List comments of a house
//
  //
  //////// ONE ELEMENT PAGES (FORMS)
//
  //{ path: 'house',          component: FormHouseComponent },        // New  house
  //{ path: 'house/:id',      component: HouseComponent },            // Show house
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

  //{ path: 'house/:id/pic',          component: FormPicComponent },   // New  pic
  //{ path: 'house/:id/Pic/:id/edit', component: FormPicComponent },   // Edit pic

  //{ path: 'user', component: FormUserComponent },                    // New  user
  //{ path: 'user/:id', component: UserComponent },                    // Show user
  //{ path: 'user/:id/edit', component: FormUserComponent },           // Edit user

    // Redirect to editorial content
    //{path: 'faq',     component: ExternalPage},
    //{path: 'support', component: ExternalPage},
    //{path: 'news',    component: ExternalPage},
    //{path: 'cgu',     component: ExternalPage},
    //{path: 'about',   component: ExternalPage},
    //{path: 'help',    redirectTo:'faq'},
    //{path: 'blog',    redirectTo:'news'},
  
