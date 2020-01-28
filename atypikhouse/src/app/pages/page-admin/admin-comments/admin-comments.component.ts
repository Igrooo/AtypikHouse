import * as $ from 'jquery';
import { Component, OnInit } from '@angular/core';
import { DataService} from "src/app/data.service";
import { Comment } from "src/app/logic/Comment";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-comments',
  templateUrl: './admin-comments.component.html'
})
export class AdminCommentsComponent implements OnInit {
  comments: [Comment];

  displayedColumns: string[] = ['ID', 'comment', 'rating', 'date', 'ID_user', 'ID_booking', 'tools'];

  editOn:string;

  isReadonly:boolean = true;

  constructor(private data: DataService,
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

  edit(comment){
    this.data.save("comments", comment, result => {
      if (result) {
        
      }
    });
  }

  delete(commentID){
    this.data.delete("comments", commentID, result => {
      if (result) {
        let tr = $('#'+commentID).parents('tr');
        tr.remove();
      }
    });
  }
  
  ngOnInit() {
    this.data.getList("comments", comments => {
      this.comments = comments;
    });
  }

}
