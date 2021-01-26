import { Component, OnInit, Input } from '@angular/core';
import {Employee} from '../employee';
@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  @Input() filteredEmployees: Employee[];
  constructor() { }

  ngOnInit() {
  }

}
