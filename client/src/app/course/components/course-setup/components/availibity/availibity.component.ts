import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfectScrollbarConfigInterface,
  PerfectScrollbarComponent, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-availibity',
  templateUrl: './availibity.component.html',
  styleUrls: ['./availibity.component.scss']
})
export class AvailibityComponent implements OnInit {
  prepareCalendar:any[]=[];
  timeZone:string;
  



  public type: string = 'component';

  public disabled: boolean = false;

  public config: PerfectScrollbarConfigInterface = {};

  @ViewChild(PerfectScrollbarComponent) componentRef?: PerfectScrollbarComponent;
  @ViewChild(PerfectScrollbarDirective) directiveRef?: PerfectScrollbarDirective;
  someDate=new Date();
  myForm=new FormGroup({mydate:new FormControl(new Date())});
  constructor() { }
  
  ngOnInit(): void {
    
    this.getCalendarForm();
  }
 


  getCalendarForm() {
    for(let i=1;i<=23;i++){
      if(i<=9){
      var value = 
        {
          "time": '0'+i+':00',
          "availability": {
            "Monday": false,
            "Tuesday": false,
            "Wednesday": false,
            "Thursday": false,
            "Friday": false,
            "Saturday": false,
            "Sunday": false
          }
        }
        this.prepareCalendar.push(value);
      }
      else{
        var value = 
        {
          "time": i+':00',
          "availability": {
            "Monday": false,
            "Tuesday": false,
            "Wednesday": false,
            "Thursday": false,
            "Friday": false,
            "Saturday": false,
            "Sunday": false
          }
        }
        this.prepareCalendar.push(value);
      }
      }
  
     let twentyFour= {
        "time": '00:00',
        "availability": {
          "Monday": false,
          "Tuesday": false,
          "Wednesday": false,
          "Thursday": false,
          "Friday": false,
          "Saturday": false,
          "Sunday": false
        }
      }
      this.prepareCalendar.push(twentyFour);
    }

    
  changeValue(index, value) {
    
    this.prepareCalendar[index].availability[value] = !this.prepareCalendar[index].availability[value];
  }

  isCheckedOrNot(index, value) {
    
    return this.prepareCalendar[index].availability[value];
  }



  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public scrollToXY(x: number, y: number): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollTo(x, y, 500);
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.scrollTo(x, y, 500);
    }
  }

  public scrollToTop(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollToTop();
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.scrollToTop();
    }
  }

  public scrollToLeft(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollToLeft();
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.scrollToLeft();
    }
  }

  public scrollToRight(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollToRight();
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.scrollToRight();
    }
  }

  public scrollToBottom(): void {
    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.scrollToBottom();
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.scrollToBottom();
    }
  }

  public onScrollEvent(event: any): void {
    console.log(event);
  }
}
