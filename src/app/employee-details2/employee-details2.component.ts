import { Component, OnInit,Input } from '@angular/core';
import { from } from 'rxjs';
import { Employee } from '../employee';
@Component({
  selector: 'app-employee-details2',
  templateUrl: './employee-details2.component.html',
  styleUrls: ['./employee-details2.component.css']
})
export class EmployeeDetails2Component implements OnInit {

  @Input() Emp: Employee;


  constructor() { }

  ngOnInit() {
  }

}
