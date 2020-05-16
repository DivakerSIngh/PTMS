import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-cours-take',
  templateUrl: './course-take.component.html',
  styleUrls: ['./course-take.component.scss']
})
export class CourseTakeComponent implements OnInit {
frmModeType='b';
  constructor(private router:Router,private activateRoute:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    
    if(this.activateRoute.params['value'])
      this.frmModeType=  this.activateRoute.params['value'].mode;
  }

}
