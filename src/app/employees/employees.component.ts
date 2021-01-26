import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeService} from '../employee.service'
import { from, Observable } from 'rxjs';
import { DepartmentService } from '../department.service';
import { filter } from 'minimatch';
import { Department } from '../department';
import { Location } from '@angular/common';
import{HttpClient,HttpHeaders}from '@angular/common/http';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
header = "My Employees";
employees :Employee[];
filteredEmployees:Employee[];
departments:Department[];
selectedEmpNo: number;
selectedEmpNo2: number;
selectedEmpNo3: number;

birthDate;
newEmpNo;
newEmpFirstName;
newEmpLastName
newEmpDepNo;


changedEmpDepNo;
changedEmpFName;
changedEmpLName;
changedBirthDate;

employee = Employee;
selectedEmp:Employee;

location: Location;

searchText;
  constructor(private employeeService: EmployeeService,private departmentService:DepartmentService,private http: HttpClient) {
   // this.employees = employeeService.GetListOfEmployees();
    //this.departments = departmentService.GetDepsArray();
   }

  ngOnInit() {
    //this.selectedEmpNo;
    this.getListEmployees();
    this.getListDepartments();
  }

getListEmployees(){
  this.employeeService.GetListOfEmployees().subscribe(empList=>this.employees=empList);
}

getListDepartments(){
  this.departmentService.getDepartments().subscribe(depList=>this.departments=depList);
}
GetEmployeeByNr(){
  this.employeeService.GetEmployeeByNr(this.selectedEmpNo);
}

AddNewEmployee():void{
  // if(this.newEmpFirstName!=null && this.newEmpLastName != null){
  let newEmp = new Employee(this.newEmpNo,this.newEmpDepNo,this.newEmpFirstName,this.newEmpLastName,this.birthDate)
  //this.employeeService.AddNewEmployee(newEmp);
  //this.employees.push(newEmp);

  //this.employeeService.AddNewEmployee(newEmp).subscribe(emp =>{this.employees.push(emp);});

  this.employeeService.AddNewEmployee(newEmp).subscribe(
    emp => {
      this.employees.push(emp);
    }
  )

}



reloadPage(){
  window.location.reload();
}
GoBack(){
  this.location.back();
}

ChangeEmpDetail(){
  this.employeeService.ChangeEmpDetail(this.selectedEmpNo,this.changedEmpFName);
}




DeleteEmployee(emp:Employee){
 // this.employeeService.DeleteEmployee(selectedId);
  this.employees= this.employees.filter(e => e!==emp);
  this.employeeService.RemoveEmp2(emp).subscribe();
}

ViewEmployeeDetail(): void{
  this.employeeService.ViewEmployeeDetail(this.selectedEmpNo2).subscribe(emp => this.selectedEmp = emp);
}



SearchEmployeeByName(){
  this.filteredEmployees = this.employeeService.SearchEmployeeByName(this.searchText);
}


sortbyId():void{
  this.employees.sort((a,b)=>(a.id)>(b.id)?1:((b.id>a.id)?-1 :0));
}

sortbyFirstName():void{
  this.employees.sort((a,b)=>(a.first_name)>(b.first_name)?1:((b.first_name>a.first_name)?-1 :0));
}
sortbyLastName():void{
  this.employees.sort((a,b)=>(a.last_name)>(b.last_name)?1:((b.last_name>a.last_name)?-1 :0));
}
sortbyDepartmentId():void{
  this.employees.sort((a,b)=>(a.department_id)>(b.department_id)?1:((b.department_id>a.department_id)?-1 :0));
}
sortbyBirthDate():void{
  this.employees.sort((a,b)=>(a.birth_date)>(b.birth_date)?1:((b.birth_date>a.birth_date)?-1 :0));

}
}
