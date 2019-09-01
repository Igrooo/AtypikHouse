import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/logic/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {
  post: Post;
  constructor() { }

  ngOnInit() {
  }

}
