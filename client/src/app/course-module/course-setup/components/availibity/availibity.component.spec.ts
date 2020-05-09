import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailibityComponent } from './availibity.component';

describe('AvailibityComponent', () => {
  let component: AvailibityComponent;
  let fixture: ComponentFixture<AvailibityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailibityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailibityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
