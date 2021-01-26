import { Injectable } from '@angular/core';
import{Department} from './department';
import{DEPARTMENTS} from './mock-departments';
import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { Observable, of } from 'rxjs';
import {DepartmentService} from './department.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employee = Employee;
  department = Department;
  changedEmpName;
  selectedEmpNo: number;
  employees: Employee[]=[];
  selectedEmp: Employee;
  departments: Department[];
 emp:Employee;

private employeesUrl='http://i875395.hera.fhict.nl/api/406227/employee';


private httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


GetListOfEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeesUrl);
  }
  
 
  
 GetEmployeeByNr(empNo: number): Employee{
    for(var i=0; i<this.employees.length;i++){
      if(this.employees[i].id == empNo){
        return this.employees[i];
      }
    }
  }
  
  GetEmpById(id:number):Observable<Employee>{
    const url = `${this.employeesUrl}/?id=${id}`;
    return this.http.get<Employee>(url);
  }
  
  AddNewEmployee(newEmp: Employee):Observable<Employee>{
    // this.employees.push(newEmp);
    return this.http.post<Employee>(this.employeesUrl,newEmp,this.httpOptions);
  
  }

 

  ChangeEmpDetail(selectedEmpNo:number,changedEmpFName:string) :Observable<Employee> {
    let tempEmp = this.GetEmployeeByNr(selectedEmpNo);
    const url = `${this.employeesUrl}/?id=${selectedEmpNo}`;
    if(tempEmp!=null){
      if(changedEmpFName!=null )
      {tempEmp.first_name = changedEmpFName;
        // tempEmp.last_name = changedEmpLName;
        // tempEmp.department_id = changedEmpDepNo;
        // tempEmp.birth_date=birthDate;
        return this.http.put<Employee>(url, tempEmp, this.httpOptions);

      }

      // else if(changedEmpFName==null || changedEmpLName == null || birthDate ==null){
      //   tempEmp.department_id = changedEmpDepNo;
      //   return this.http.put<Employee>(url, tempEmp, this.httpOptions);
      // }
      
    }
    
  }
  

  RemoveEmp2(emp:Employee){
   const id = emp.id;
   const url = `${this.employeesUrl}/?id=${id}`;
   this.employees.filter(el => el !== emp);

   return this.http.delete<Employee>(url,this.httpOptions);

  }
  
 ViewEmployeeDetail(selectedEmpNo: number) :Observable<Employee>{
  // let tempEmp = this.GetEmployeeByNr(selectedEmpNo);
  let tempEmp = this.GetEmpById(selectedEmpNo);
  if(tempEmp != null){
    return tempEmp;
  }
  this.http.post<Employee>(this.employeesUrl,tempEmp,this.httpOptions).subscribe(emp => {this.employees.push(emp)});

}

changeEmpDetail(selectedEmpNo:number,changedEmpDepNo:number) :Observable<any> {
  let tempEmp = this.GetEmployeeByNr(selectedEmpNo);
  const url = `${this.employeesUrl}?id=${selectedEmpNo}`;
  if(tempEmp!=null){
      tempEmp.department_id = changedEmpDepNo;
      return this.http.put<Employee>(url, tempEmp, this.httpOptions);
    }
    
  }
  deleteEmpDetail(selectedEmpNo:number,changedEmpDepNo:number) :Observable<any> {
    let tempEmp = this.GetEmployeeByNr(selectedEmpNo);
    const url = `${this.employeesUrl}?id=${selectedEmpNo}`;
    if(tempEmp!=null && tempEmp.department_id==changedEmpDepNo){
        tempEmp.department_id = null;
        return this.http.put<Employee>(url, tempEmp, this.httpOptions);
      }
      
    }


SearchEmployeeByName(searchText:string): Employee[]{
let filteredEmps:Employee[] = [];  

for(var i=0;i<this.employees.length;i++){
  let searchName = this.employees[i].first_name.toLowerCase() + " " + this.employees[i].last_name.toLowerCase();
  if(this.employees[i].first_name.toLowerCase().includes(searchText.toLowerCase())  || this.employees[i].last_name.toLowerCase().includes(searchText.toLowerCase()) || searchName.toLowerCase().includes(searchText.toLowerCase())){
    filteredEmps.push(this.employees[i]);
  }
}
return filteredEmps;
}
updateEmployee(emp: Employee): Observable<any> {
  const url = `${this.employeesUrl}/?id=${emp.id}`;
  return this.http.put(url, emp, this.httpOptions);
  }

  constructor(private departmentService: DepartmentService, private http: HttpClient) {
    // this.departments = departmentService.GetDepsArray();
    this.GetListOfEmployees().subscribe((employees) => {this.employees=employees});
   }
  
  // getEmployees(): Observable<Employee[]>{
  //   return of (EMPLOYEES);
  // }
}
