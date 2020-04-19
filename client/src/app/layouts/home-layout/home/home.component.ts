import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogConfig,MatDialogRef,MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true

  }
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  

  login(): void {
    let dialogRef: MatDialogRef<LoginComponent>;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {};
    dialogConfig.disableClose = true;
    dialogConfig.minWidth = "50vw";
    dialogConfig.maxWidth = "170vw";
    dialogConfig.minHeight = "150vh";
    dialogConfig.maxHeight = "190vh";
    dialogRef = this.dialog.open(LoginComponent, dialogConfig);
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {
      
      });
  }
}
