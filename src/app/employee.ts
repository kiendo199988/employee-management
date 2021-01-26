export class Employee {
    id: number;
    department_id: number;
    first_name: string;
    last_name: string;
    birth_date: string;


    constructor(id : number, depId:number,firstName:string,lastName:string,birthDate:string){
           this.id = id;
           this.first_name = firstName;
           this.last_name=lastName;
           this.department_id= depId;
           this.birth_date = birthDate;
    }
}
