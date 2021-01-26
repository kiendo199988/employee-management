import { Employee } from './employee';

export class Department {
constructor(
public id: number,
public name:string,
public building: string,
public emp: Employee[] ){}
}
