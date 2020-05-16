import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialogConfig, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BargainComponent } from '../bargain/bargain.component';
import { LoginComponent } from 'src/app/home/components/login/login.component';
@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {

  constructor(private router:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  isBargainSection=false;
goto(mode){
this.router.navigate(['/elearn/course/take',mode]);
  
}
bargain(){
  //this.router.navigate(['/elearn/login','elearn/course/courseinfo','VIEW']);
  //this.openDialog();

  let editItem=null;
  let message='Client added successfully.';
  let dialogRef: MatDialogRef<BargainComponent>;
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = { editItem: editItem };
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
   dialogConfig.minWidth= '23vw';
   dialogConfig.minHeight= '23vw';
   dialogConfig.maxWidth= '80vw';
   dialogConfig.maxHeight= '119vw';

    
 
  dialogRef = this.dialog.open(BargainComponent, dialogConfig);
 
  dialogRef.afterClosed().subscribe(result => {
    this.router.navigate(['/elearn/course/take','n']);
    });
}

openDialog(): void {
  let editItem=null;
  let message='Client added successfully.';
  let dialogRef: MatDialogRef<LoginComponent>;
  const dialogConfig = new MatDialogConfig();
  dialogConfig.data = { editItem: editItem };
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
  dialogConfig.minWidth="38vw";
  dialogConfig.minHeight="43vw";
   dialogConfig.maxWidth = "100vw";
  
   dialogConfig.maxHeight = "115vw";
 
  dialogRef = this.dialog.open(LoginComponent, dialogConfig);
 
  dialogRef.afterClosed().subscribe(result => {
    this.isBargainSection=true;
    });
}
}
