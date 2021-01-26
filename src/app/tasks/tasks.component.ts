import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import { Task } from '../task';
// import { identifierModuleUrl } from '@angular/compiler';
import {DepartmentService}from '../department.service';
import {EmployeeService} from '../employee.service';
import{HttpClient,HttpHeaders}from '@angular/common/http';
import { Department } from '../department';
import { Employee } from '../employee';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

departments: Department[];
employees: Employee[];

  selectedtask1: Task;
  value: string = "";
  tasks: Task[];
  selectedTask: Task;
  
  newId: number;
  newName;
  newDepNo:number;
  dueDate:string;
  newEmpId:number[];
  
  constructor(private departmentService:DepartmentService,private taskservice: TaskService,private employeeService: EmployeeService,private http: HttpClient) {

   }

  ngOnInit() {
    this.getTasks();
    this.getDepartments();
    this.getEmployees();
  }
  onSelect(task: Task):void {
    this.selectedTask = task;
  }
  // onSelect1(task:Task):void{
  //     this.tasks.push(task);
  //   }
    
  // onSelect2(task:Task):void{
  //   this.tasks.pop();
  // }

  onTest(value:string):void{
    for(let task of this.tasks)
    {
      if(task.name.toLowerCase() == value.toLowerCase())
      {
          this.selectedTask= task;
          return;
      }
    }
    this.selectedTask=null;
  }
  
  getTasks(){
    this.taskservice.getTasks().subscribe(tasks=>this.tasks=tasks);
  }

  // ChangeTaskName(selectedTaskNo: number) {
  //   let tempTasks = this.GetTaskByNr(this.selectedTaskNo);
  //   if (tempTasks != null) {
  //     tempTasks.name = this.changedTaskName;
  //   }}

    GetTaskByNr(taskNo: number): Task {
      for (var i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].id == taskNo) {
          return this.tasks[i];
        } // for deleting or renaming the task
      }
    }

    SearchTask(value:string):void{
      for(let task of this.tasks)
      {
        if(task.name.toLowerCase() == value.toLowerCase())
        {
            this.selectedTask= task;
            return;
        }
      }
      this.selectedTask=null;
    }

    delete(task: Task):void{
      this.tasks = this.tasks.filter(t => t !== task);
      this.taskservice.deleteTask(task).subscribe();
    }

    // add(name: string): void {
    //   name = name.trim();
    //   if (!name) { return; }
    //   this.taskservice.addTask({name:name, task:[]} as Task)
    //     .subscribe(task => {
    //       this.tasks.push(task);
    //     });
    // }

    addT(): void {
      let newTask = new Task(this.newId,this.newDepNo,this.newName,this.newEmpId,this.dueDate);
      this.taskservice.addTask(newTask).subscribe(
        newT =>{
          newTask=newT;
          this.tasks.push(newTask);
        }
      )
    }

   getDepartments(){
     this.departmentService.getDepartments().subscribe(deps =>this.departments = deps);
   }

   getEmployees(){
  this.employeeService.GetListOfEmployees().subscribe(emps=>this.employees=emps);
}


}

