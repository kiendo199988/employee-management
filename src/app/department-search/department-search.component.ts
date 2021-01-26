import { Component, OnInit, Input } from '@angular/core';
import { Department } from '../department';

@Component({
  selector: 'app-department-search',
  templateUrl: './department-search.component.html',
  styleUrls: ['./department-search.component.css']
})
export class DepartmentSearchComponent implements OnInit {

  @Input() filteredDepartments: Department[]
  constructor() { }

  ngOnInit() {
  }

}
