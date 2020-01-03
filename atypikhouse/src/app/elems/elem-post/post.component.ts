import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/logic/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent implements OnInit {
  post: Post;
  constructor() { }

  ngOnInit() {
  }

}
