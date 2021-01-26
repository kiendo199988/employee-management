import { Employee } from './employee';

export class Task {
  id: number;
  due_date:string;
  name: string;
  employees: number[];
  department_id: number;
  constructor(id : number, department_id:number, name: string, employees:number[],due_date:string)
  {
    this.id = id;
    this.name = name;
    this.due_date=due_date;
    this.department_id=department_id;
    this.employees=employees;

  }
}