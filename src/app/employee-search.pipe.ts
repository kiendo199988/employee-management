import { Pipe, PipeTransform,Injectable } from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from './employee.service'
@Pipe({
  name: 'filter'
})
@Injectable()
export class EmployeeSearchPipe implements PipeTransform {
employeeService;
empList;
  constructor(employeeService: EmployeeService){
this.employeeService = employeeService;
this.empList = employeeService.GetListOfEmployees();
}
  transform(employees: Employee[], searchText: string) {
    
  }
}
