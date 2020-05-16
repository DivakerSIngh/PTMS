import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bargain',
  templateUrl: './bargain.component.html',
  styleUrls: ['./bargain.component.scss']
})
export class BargainComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BargainComponent>) { }

  ngOnInit(): void {
  }

  bargainDone(){
    this.dialogRef.close();
  }

}
