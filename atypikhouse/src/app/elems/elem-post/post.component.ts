import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/logic/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: []
})
export class PostComponent implements OnInit {
  post: Post;
  constructor() { }

  ngOnInit() {
  }

}
