import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators, PatternValidator } from '@angular/forms';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { LoginUser } from 'src/app/model/login';
import { AppService } from 'src/app/service/app.service';
import { apiConfig } from 'src/app/service/application-setting';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[RxFormBuilder]
})
export class LoginComponent implements OnInit {
  frmLogin :FormGroup;
  user:LoginUser;
  constructor(private activatedRoute: ActivatedRoute,private appservice:AppService,  private router:Router,private formBuilder: RxFormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>) {
      this.user= new LoginUser();
      this.frmLogin =this.formBuilder.formGroup(this.user);
     }

  ngOnInit(): void {
    debugger
    this.appservice.get('user/get',{}).subscribe((x)=>{
debugger
    })
  }
  login(){
    debugger

    
  this.appservice.post(apiConfig.login,this.user).subscribe((response)=>{
debugger
//this.dialogRef.close();

  })
  //  const returnUrl= this.activatedRoute.params['value'].returnUrl;
  //  if(returnUrl){
  //   this.router.navigate([returnUrl]);
  //  }else{
  //   this.router.navigate(['elearn']);
  //  }
  this.dialogRef.close();
  
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
