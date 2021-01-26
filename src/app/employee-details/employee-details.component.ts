import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {Department} from '../department'
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service'
import { from } from 'rxjs';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  @Input() employee: Employee;
  departments:Department[];

  
  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
    private departmentService:DepartmentService) {
      this.employee = this.GetEmpByNo();
     }
  ngOnInit() {
    this.GetEmpByNo();
    this.getListDepartments();

  }
GetEmpByNo():Employee{
  const id= +this.route.snapshot.paramMap.get('id');
  this.employee= this.employeeService.GetEmployeeByNr(id);
  return this.employee;
}
save(): void {
  this.employeeService.updateEmployee(this.employee)
    .subscribe(() => this.GoBack());
}

getListDepartments(){
  this.departmentService.getDepartments().subscribe(depList=>this.departments=depList);
}
GoBack():void{
  this.location.back();
}
}
