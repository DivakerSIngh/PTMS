import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBasicInfoComponent } from './course-basic-info.component';

describe('CourseBasicInfoComponent', () => {
  let component: CourseBasicInfoComponent;
  let fixture: ComponentFixture<CourseBasicInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBasicInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
