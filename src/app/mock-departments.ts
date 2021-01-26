import { Department } from './department';
import {EMPLOYEES} from './mock-employees';

export const DEPARTMENTS: Department[] = [
    { id: 1, name: 'HR', emp: [EMPLOYEES[0],EMPLOYEES[1]],building:''},
    { id: 2, name: 'Data Analysis', emp: [EMPLOYEES[2]],building:''},
    { id: 3, name: 'Finance', emp: [],building:'' },
    { id: 4, name: 'Marketing', emp: [] ,building:''},
    { id: 5, name: 'IT', emp: [] ,building:''},
    { id: 6, name: 'Sales', emp: [] ,building:''},
    { id: 7, name: 'Business Development', emp: [] ,building:''},
    { id: 8, name: 'Global Research', emp: [] ,building:''},
    { id: 9, name: 'Services', emp: [] ,building:''},
    { id: 10, name: 'Production', emp: [] ,building:''}
];