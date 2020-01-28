import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { Post } from "src/app/logic/Post";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html'
})
export class AdminPostsComponent implements OnInit {
  posts: [Post];

  displayedColumns: string[] = ['ID', 'date', 'message', 'ID_house', 'ID_userFrom','ID_userTo', 'tools'];

  editOn:string;

  isReadonly:boolean = true;

  constructor(
    private data: DataService,
    private datePipe: DatePipe) {

  }

  focus(ID,focusedMode:string){
    let tr = $('#'+ID).parents('tr');
    tr.addClass('focused '+focusedMode);
    if(focusedMode == 'edit'){
      this.isReadonly = false;
    }
    this.editOn = 'edit-on';
  }
  cancel(ID, cancelMode:string){
    let tr = $('#'+ID).parents('tr');
    tr.removeClass('focused delete edit');
    this.isReadonly = true;
    if(cancelMode == 'edit'){
      tr.find('.ah-admin-input').each((i, input) => {
        let prevValue = $(input).data('prevValue');
        $(input).val(prevValue);
      });
    }
    this.editOn = '';
  }

  update(ID, name:string, eventType:string, event){
    let input = $('#form-edit-'+ID+' [name="'+name+'"]');
    let value;
    if(eventType == 'input'){
      value = event.target.value;
    }
    else{
      value = event.value;
    }
    input.val(value);
  }

  edit(post){
    this.data.save("posts", post, result => {
      if (result) {
        
      }
    });
  }

  delete(postID){
    this.data.delete("posts", postID, result => {
      if (result) {
        let tr = $('#'+postID).parents('tr');
        tr.remove();
      }
    });
  }

  ngOnInit() {
    this.data.getList("posts", posts => {
      this.posts = posts;
    });
  }

}