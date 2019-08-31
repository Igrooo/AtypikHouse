import { Component, OnInit } from '@angular/core';
import { Comment } from "../../logic/Comment";
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.less']
})
export class CommentComponent implements OnInit {
  comment: Comment;

  constructor() { }

  ngOnInit() {
  }

}
