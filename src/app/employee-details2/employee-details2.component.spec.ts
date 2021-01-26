import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetails2Component } from './employee-details2.component';

describe('EmployeeDetails2Component', () => {
  let component: EmployeeDetails2Component;
  let fixture: ComponentFixture<EmployeeDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
