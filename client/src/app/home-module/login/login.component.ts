import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private router:Router,
    public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }
  login(){
    debugger
   const returnUrl= this.activatedRoute.params['value'].returnUrl;
   if(returnUrl){
    this.router.navigate([returnUrl]);
   }else{
    this.router.navigate(['elearn']);
   }
  
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
