import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { TasksComponent } from './tasks/tasks.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material';
import { EmployeeSearchPipe } from './employee-search.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetails2Component } from './employee-details2/employee-details2.component';
import {MatInputModule} from '@angular/material/input';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { HttpClientModule } from '@angular/common/http';  //
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from  '@angular/material';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskSearchComponent } from './task-search/task-search.component';
import { DepartmentSearchComponent } from './department-search/department-search.component';
import { EmployeeDetails3Component } from './employee-details3/employee-details3.component'; 



@NgModule({
  declarations: [
    AppComponent,
    DepartmentsComponent,
    EmployeesComponent,
    TasksComponent,
    DashboardComponent,
    EmployeeSearchComponent,
    EmployeeDetailsComponent,
    EmployeeSearchPipe,
    EmployeeDetails2Component,
    DepartmentDetailComponent,
    TaskDetailComponent,
    TaskSearchComponent,
    DepartmentSearchComponent,
    EmployeeDetails3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    NgbModule,
    MatButtonModule, 
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
