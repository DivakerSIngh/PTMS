import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpErrorInterceptor } from './shared/intercepter/HttpErrorInterceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from './shared/material/material.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    CarouselModule,
    BrowserModule,
    RouterModule,    
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,ReactiveFormsModule,RxReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
