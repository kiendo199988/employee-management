import { Component, OnInit, Input } from '@angular/core';
import {Department} from '../department';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DepartmentService }  from '../department.service';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {


  @Input() department:Department;
  constructor(  
    private route: ActivatedRoute,
    private departmentservice: DepartmentService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getDepartment();
  }

  getDepartment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.departmentservice.getDepartment(id)
      .subscribe(department=> this.department = department);

  }
  
  



  save(): void {
    this.departmentservice.updateDepartment(this.department)
      .subscribe(() => this.goBack());
  }
  
  goBack(): void {
    this.location.back();
  }

}
