import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css']
})
export class TaskSearchComponent implements OnInit {

  @Input() filteredTasks: Task[];

  constructor() { }

  ngOnInit() {
  }

}
