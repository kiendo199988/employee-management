import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../task';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TaskService }  from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  @Input() task :Task;
  constructor(  
    private route: ActivatedRoute,
    private taskservice: TaskService,
    private location: Location
    
  ) { }

  ngOnInit() {
    this.getTask();
  }

  getTask():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskservice.getTask(id).subscribe(task => this.task=task);
// this.task = this.taskservice.getTask2(id);
//   return this.task;
  }

  goBack(): void {
    this.location.back();
  }

  saveT(): void {
    this.taskservice.updateTask(this.task)
      .subscribe(() => this.goBack());
  }

}
