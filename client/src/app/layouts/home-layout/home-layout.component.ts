import { Component, OnInit, Inject, Injector } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MatDialogConfig,MatDialogRef,MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
   dialogRef: MatDialogRef<LoginComponent>;
  constructor(public dialog: MatDialog,injector: Injector) { }

  ngOnInit(): void {
  }


  login(): void {
    
    let dialogRef: MatDialogRef<LoginComponent>;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    dialogConfig.disableClose = false;
    dialogConfig.minWidth = "50vw";
    dialogConfig.maxWidth = "70vw";
    dialogConfig.minHeight = "50vh";
    dialogConfig.maxHeight = "90vh";
    dialogRef = this.dialog.open(LoginComponent, dialogConfig);
    
    
    dialogRef.afterClosed().subscribe(result => {
      
      });
  }
}
