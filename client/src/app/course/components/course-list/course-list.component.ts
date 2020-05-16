import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor(private router:Router) { }
  array =[1,2,3,4];
  gridViewListViewClass='content grid';
  ngOnInit(): void {
  }
  goto(){
    this.router.navigate(['/elearn/course/courseinfo'])
  }
  changeView(view){
    if(view=='list')
    this.gridViewListViewClass='content list fade-2';
    if(view=='grid')
    this.gridViewListViewClass='content grid fade-2';
  }



}
