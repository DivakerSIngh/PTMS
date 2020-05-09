import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  login(){
    
      let editItem=null;
      let message='Client added successfully.';
     
      let dialogRef: MatDialogRef<LoginComponent>;
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = { editItem: editItem };
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.minWidth="38vw";
      dialogConfig.minHeight="43vw";
       dialogConfig.maxWidth = "100vw";
      
       dialogConfig.maxHeight = "115vw";
     
      dialogRef = this.dialog.open(LoginComponent, dialogConfig);
      dialogRef.disableClose = true;
      dialogRef.afterClosed().subscribe(result => {
        
        });
    
  }
}
