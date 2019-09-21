import { Component, OnInit } from '@angular/core';
import { Comment } from "src/app/logic/Comment";
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styles: []
})
export class CommentComponent implements OnInit {
  comment: Comment;

  constructor() { }

  ngOnInit() {
  }

}
