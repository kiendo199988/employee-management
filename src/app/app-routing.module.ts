import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from './employees/employees.component';
import {TasksComponent} from './tasks/tasks.component';
import { DepartmentsComponent } from './departments/departments.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import {DepartmentDetailComponent} from './department-detail/department-detail.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard',component:DashboardComponent},
  {path: 'employees',component:EmployeesComponent},
  {path: 'department',component:DepartmentsComponent},
  {path: 'task',component:TasksComponent},
  { path: 'employee-detail/:id', component: EmployeeDetailsComponent },
  { path: 'detail/:id', component: DepartmentDetailComponent},
  { path: 'task-det/:id', component: TaskDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
