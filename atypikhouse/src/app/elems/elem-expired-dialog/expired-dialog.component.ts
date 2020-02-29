import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-expired-dialog',
  templateUrl: './expired-dialog.component.html'
})
export class ExpiredDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ExpiredDialogComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
