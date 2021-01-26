import { Component, OnInit } from '@angular/core';
import{EmployeeService} from '../employee.service';
import{Employee} from '../employee';
import { from } from 'rxjs';
import { Department} from '../department';
import {DepartmentService} from '../department.service';
import { Task} from '../task';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  employees:Employee[];
  departments: Department[];
  tasks: Task[];


  constructor(
    private employeeService:EmployeeService,
    private departmentservice: DepartmentService,
    private taskservice: TaskService)
  { 
   //this.employees=this.getEmployees();
    
  }
  
  ngOnInit() {
   this.getEmployees();
   this.getDepartments();
   this.getTasks();
  }
  getEmployees():void{
    this.employeeService.GetListOfEmployees().subscribe(emps => this.employees =emps.slice(1,5));
  }
  



  getDepartments(): void {
    this.departmentservice.getDepartments()
      .subscribe(departments => this.departments = departments.slice(1, 5));
  }


  getTasks(): void {
    this.taskservice.getTasks()
      .subscribe(tasks => this.tasks = tasks.slice(1, 5));
  }

}
