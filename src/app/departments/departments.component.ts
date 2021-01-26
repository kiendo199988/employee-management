import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../department.service';
import { Department } from '../department';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';
import {Employee} from '../employee';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  selectedDepartment1: Department;
  value: string = "";
  departments: Department[];
  employees:Employee[];
  selectedDepartment: Department;
  newId: number= 0;
  newName: string = "";
  newBuilding: string = "";
  filteredDepartments:Department[]=[];
  changedEmpFName: string;
  selectedEmpNo: number;
  changedEmpDepNo:number;
  changedEmpLName: string; changedBirthDate:string;
  changedEmpDep:Department;

  constructor(private departmentservice: DepartmentService, private employeeService:EmployeeService, private location:Location) { }

  ngOnInit() {
    this.getDepartments();
    this.getEmployees();
  }
  onSelect(department: Department):void {
    this.selectedDepartment = department;
  }
  
  add(name: string, building:string): void {
    name = name.trim();
    if (!name) { return; }
    this.departmentservice.addDepartment({name:name, emp:[], building:building} as Department)
      .subscribe(department => {
        this.departments.push(department);
      });
  }

  delete(department: Department):void{
    this.departments = this.departments.filter(d => d !== department);
    this.departmentservice.deleteDepartment(department).subscribe();
  }

  search(searchText:string): void{
    
    for(var i=0;i<this.departments.length;i++){
      if(this.departments[i].name.toLowerCase().includes(searchText.toLowerCase())){
        this.filteredDepartments.push(this.departments[i]);
      }
    }
    }

  ChangeEmpDetail(): void{
      this.employeeService.changeEmpDetail(this.selectedEmpNo,this.changedEmpDepNo).subscribe(()=>alert("Employee added successfully"));
  }

  DeleteEmpDetail(): void{
    this.employeeService.deleteEmpDetail(this.selectedEmpNo,this.changedEmpDepNo).subscribe(()=>alert("Employee deleted successfully"));
}
  
  getDepartments():void{
    this.departmentservice.getDepartments().subscribe(departments=>this.departments=departments);
  }
   
  getEmployees():void
  {
    this.employeeService.GetListOfEmployees().subscribe(employees=>this.employees=employees)
  }
  GoBack(){
    this.location.back();
  }

  sortbyId():void{
    this.departments.sort((a,b)=>(a.id)>(b.id)?1:((b.id>a.id)?-1 :0));
  }

  sortbyName():void{
    this.departments.sort((a,b)=>(a.name)>(b.name)?1:((b.name>a.name)?-1 :0));
  }
}
