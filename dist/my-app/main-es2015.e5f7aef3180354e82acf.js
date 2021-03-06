(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n\r\n</head>\r\n<mat-toolbar>{{title}}</mat-toolbar>\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"nav-link\" routerLink=\"/dashboard\">Dashboard</a>\r\n    <a class=\"nav-link\" routerLink=\"/employees\">Employees</a>\r\n    <a class=\"nav-link\" routerLink=\"/department\">Department</a>\r\n    <a class=\"nav-link\" routerLink=\"/task\">Task</a>\r\n  </nav>\r\n\r\n  <router-outlet></router-outlet>\r\n<!--<app-employees></app-employees><br>\r\n<mat-toolbar color=\"primary\">\r\n    <mat-toolbar-row>\r\n   \r\n      <h1>Home</h1>\r\n      <span class=\"menu-spacer\"></span>\r\n      <div>\r\n        <a mat-button routerLink=\"/tasks\"> Tasks </a>\r\n        <a mat-button routerLink=\"/employees\"> Employees </a>\r\n        <a mat-button routerLink=\"/departments\"> Departments </a>\r\n      </div>\r\n    </mat-toolbar-row>\r\n\r\n  </mat-toolbar>\r\n\r\n  <router-outlet></router-outlet>\r\n  \r\n<app-employees></app-employees><br>\r\n<br><br>\r\n<br>\r\n<br>\r\n<hr>\r\n<nav>\r\n    <a routerLink=\"/dashboard\">Dashboard</a>\r\n    <a routerLink=\"/departments\">Departments</a>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n<hr>\r\n<app-tasks></app-tasks><br>\r\n<br><br><br>-->\r\n\r\n<!-- <mat-slider min=\"1\" max=\"100\" step=\"1\" value=\"1\"></mat-slider> -->\r\n<br><br><br>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    \r\n<h3>Top Employees</h3>\r\n<div class=\"grid grid-pad\">\r\n\r\n\r\n    <a class=\"col-1-4\" *ngFor=\"let employee of employees\" routerLink=\"/employee-detail/{{employee.id}}\">\r\n      <div class=\"module department\">\r\n        <h4>{{employee.first_name}}</h4>\r\n      </div></a>\r\n</div>\r\n\r\n<h3>Top Departments</h3>\r\n<div class=\"grid grid-pad\">\r\n  <a *ngFor=\"let department of departments\" class=\"col-1-4\" routerLink=\"/detail/{{department.id}}\">\r\n    <div class=\"module department\">\r\n      <h4>{{department.name}}</h4>\r\n    </div>\r\n  </a>\r\n</div>\r\n\r\n<h3>Top Tasks</h3>\r\n<div class=\"grid grid-pad\">\r\n  <a *ngFor=\"let task of tasks\" class=\"col-1-4\" routerLink=\"/task-det/{{task.id}}\">\r\n    <div class=\"module department\">\r\n      <h4>{{task.name}}</h4>\r\n    </div>\r\n  </a>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/department-detail/department-detail.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/department-detail/department-detail.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"department\">\r\n\r\n        <h2>{{department.name | uppercase}} Details</h2>\r\n        <div><span>id: </span>{{department.id}}</div>\r\n        <div>\r\n          <label>name:\r\n            <mat-form-field><input matInput [(ngModel)]=\"department.name\"/></mat-form-field>\r\n          </label>\r\n        </div>\r\n        <div>\r\n          <label>building:\r\n            <mat-form-field><input matInput [(ngModel)]=\"department.building\"/></mat-form-field>\r\n          </label>\r\n        </div>\r\n        <label>employees:</label>\r\n        <ul>\r\n          <li *ngFor=\"let employee of department.employees\" [class.selected]=\"employee\">\r\n            <a routerLink=\"/employee-detail/{{employee}}\">\r\n              <span class=\"badge\">{{employee}}\r\n              </span>{{employee.name}}\r\n              </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n\r\n      <button (click)=\"save()\">save</button>\r\n      <button (click)=\"goBack()\">go back</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/department-search/department-search.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/department-search/department-search.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"filteredDepartments\">\r\n<ul class=\"departments\">\r\n<li *ngFor=\"let department of filteredDepartments\">\r\n    <a routerLink=\"/detail/{{department.id}}\">\r\n        <span class=\"badge\">{{department.id}}\r\n        </span>{{department.name}}\r\n        </a>\r\n    </li>\r\n</ul>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/departments/departments.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/departments/departments.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mydepartments\">\r\n<br><h3><b>My departments</b></h3><br>\r\n<ul class=\"departments\">\r\n    <li *ngFor=\"let department of departments\">\r\n        <a routerLink=\"/detail/{{department.id}}\">\r\n        <span class=\"badge\">{{department.id}}\r\n        </span>{{department.name}}\r\n        </a>\r\n        <button class=\"delete\" title=\"delete department\" (click)=\"delete(department)\">x</button>\r\n    </li> \r\n</ul>\r\n</div>\r\n<div>\r\n    <div class=\"mat-headline\">Create new department</div>\r\n    <mat-form-field><input #departmentName matInput [(ngModel)]=\"newName\" placeholder=\"name\"></mat-form-field>&nbsp;\r\n    <mat-form-field><input #departmentBuilding matInput [(ngModel)]=\"newBuilding\" placeholder=\"building(optional)\"></mat-form-field><br>\r\n    <button mat-raised-button (click)=\"add(departmentName.value,departmentBuilding.value); departmentName.value=''; departmentBuilding.value=''\">Create</button><br><br>\r\n \r\n</div>\r\n\r\n<div class=\"mat-headline\">Add employee to department</div>\r\n    \r\n   <label>Employee: </label><br>\r\n    <select class=\"btn btn-outline-primary\" [(ngModel)]=\"selectedEmpNo\">\r\n      <option *ngFor=\"let emp of employees\" [value] = \"emp.id\">\r\n        {{emp.id}} - {{emp.first_name}}\r\n      </option>\r\n    </select>\r\n    <br><br>The selected Employee Number is {{selectedEmpNo}}\r\n    <br><br>\r\n    <label>Department: </label><br>\r\n    <select class=\"btn btn-outline-primary\" [(ngModel)]='changedEmpDepNo' name=\"EmpDep\">\r\n          <option *ngFor=\"let dep of departments\" [value] = \"dep.id\">\r\n            {{dep.id}} - {{dep.name}}\r\n          </option>\r\n    </select><br>\r\n    <form (submit) = \"ChangeEmpDetail()\"><br>\r\n    \r\n    \r\n    <button mat-raised-button onclick=\"location.href = '';\"  ngbButtonLabel type=\"submit\">Change</button>\r\n    </form>\r\n<br>\r\n\r\n<div class=\"mat-headline\">Sort Departments</div>\r\n<button mat-raised-button (click)=\"sortbyId()\">Sort by ID</button>\r\n<br><br>\r\n<button mat-raised-button (click)=\"sortbyName()\">Sort by Name</button>\r\n<br><br>\r\n\r\n<div>\r\n  <div class=\"mat-headline\">Search for department</div>\r\n  <input style=\"padding:8px\" [(ngModel)]=\"value\" placeholder=\"Search for department name\"/>&nbsp;\r\n  <button mat-raised-button (click)=\"search(value)\">Search</button><br>\r\n</div><br>\r\n\r\n<app-department-search [filteredDepartments]=\"filteredDepartments\"></app-department-search>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details/employee-details.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details/employee-details.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div *ngIf=\"employee\">\r\n\r\n    <h2>{{employee.first_name | uppercase}} Details</h2>\r\n    <div><span>id: </span>{{employee.id}}</div>\r\n    <div>\r\n      <label>First name:\r\n        <mat-form-field><input matInput [(ngModel)]=\"employee.first_name\"/></mat-form-field>\r\n      </label>\r\n      <label>First name:\r\n     <mat-form-field><input matInput [(ngModel)]=\"employee.last_name\"/></mat-form-field>\r\n    </label>\r\n      <label>Birthday:\r\n        <mat-form-field><input matInput [(ngModel)]=\"employee.birth_date\"/></mat-form-field>\r\n      </label>\r\n      <label>Department:\r\n        <!-- <mat-form-field><input matInput [(ngModel)]=\"employee.department_id\"/></mat-form-field> -->\r\n    <select class=\"btn btn-outline-primary\" [(ngModel)]='employee.department_id' name=\"EmpDep\">\r\n          <option *ngFor=\"let dep of departments\" [value] = \"dep.id\">\r\n            {{dep.id}} - {{dep.name}}\r\n          </option>\r\n    </select>\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  <button (click)=\"save()\">save</button>\r\n  <button (click)=\"GoBack()\">go back</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details2/employee-details2.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details2/employee-details2.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"employeeDetails2\" *ngIf = \"Emp\">\r\n        <li class=\"list-group-item active\">Name: {{Emp.first_name}}</li><br>\r\n        <li class=\"list-group-item active\">ID number: {{Emp.id}}</li><br>\r\n        <li class=\"list-group-item active\">Department: {{Emp.department_id}}</li><br>\r\n</div>\r\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details3/employee-details3.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details3/employee-details3.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>employee-details3 works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-search/employee-search.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-search/employee-search.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"table table-bordered table-dark\" *ngIf = \"filteredEmployees\">\r\n        <table class=\"EmployeeTable\">\r\n            <tr>\r\n              <th scope=\"col\">Employee Id</th>\r\n              <th scope=\"col\">First Name</th>\r\n              <th scope=\"col\">Last Name</th>\r\n              <th scope=\"col\">Department Id</th>\r\n              <th scope=\"col\">Birth Date</th>\r\n            </tr>\r\n            <tr *ngFor = \"let employee of filteredEmployees\">\r\n              <td scope=\"row\">{{employee.id}}</td>\r\n              <td scope=\"row\">{{employee.first_name}}</td>\r\n              <td scope=\"row\">{{employee.last_name}}</td>\r\n              <td scope=\"row\">{{employee.department_id}}</td>\r\n              <td scope=\"row\">{{employee.birth_date}}</td>\r\n            </tr>\r\n        </table>\r\n        </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<body>\r\n        \r\n    \r\n    <!--table employees-->\r\n    <div class=\"table-responsive\">\r\n        <button class=\"btn-primary\" ngbButtonLabel (click)=\"sortbyId()\">Sort By ID</button>\r\n        <button class=\"btn-primary\" ngbButtonLabel (click)=\"sortbyFirstName()\">Sort By First Name</button>\r\n        <button class=\"btn-primary\" ngbButtonLabel (click)=\"sortbyLastName()\">Sort By Last Name</button>\r\n        <button class=\"btn-primary\" ngbButtonLabel (click)=\"sortbyDepartmentId()\">Sort By Department</button>\r\n        <button class=\"btn-primary\" ngbButtonLabel (click)=\"sortbyBirthDate()\">Sort By Birthdate</button>\r\n    <table  class=\"table table-bordered table-dark\">\r\n            <tr>\r\n              <th scope=\"col\">Employee Id</th>\r\n              <th scope=\"col\">First Name</th>\r\n              <th scope=\"col\">Last Name</th>\r\n              <th scope=\"col\">Department Id</th>\r\n              <th scope=\"col\">Birth Date</th>\r\n              <th id=\"deleteEmpCells\" scope=\"col\">Delete Employee</th>\r\n            </tr>\r\n            <tr  *ngFor = \"let employee of employees \"  >\r\n              <th scope=\"row\">{{employee.id}}</th>\r\n              <td>{{employee.first_name}}</td>\r\n              <td>{{employee.last_name}}</td>\r\n              <td>{{employee.department_id}}</td>\r\n              <td>{{employee.birth_date}}</td>\r\n              <td id=\"deleteEmpCells\"><button class=\"btn-primary\" ngbButtonLabel id=\"deleteButton\" title=\"delete employee\" (click)=\"DeleteEmployee(employee)\">x</button></td>              \r\n            </tr>\r\n    </table>\r\n    \r\n\r\n    </div>\r\n    <br>\r\n    <hr>\r\n    <!--form for adding employee-->\r\n    <h3>Adding a new employee:</h3>\r\n     <form (submit) = \"AddNewEmployee()\">\r\n        <input [(ngModel)]='newEmpFirstName' class=\"form-control mb-2\" id=\"inlineFormInput\" type=\"text\"  name =\"EmpName\" placeholder=\"New employee first name...\"><br>\r\n        <input [(ngModel)]='newEmpLastName' class=\"form-control mb-2\" id=\"inlineFormInput\" type=\"text\"  name =\"EmpName\" placeholder=\"New employee last name...\"><br>\r\n        <input [(ngModel)]='birthDate' class=\"form-control mb-2\" id=\"inlineFormInput\" type=\"text\"  name =\"EmpName\" placeholder=\"Birth date (eg: yyyy-mm-dd)...\"><br>\r\n        <div ngbDropdown class=\"d-inline-block\">\r\n        <select class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle [(ngModel)]='newEmpDepNo' name=\"EmpDep\">\r\n            <option  *ngFor=\"let dep of departments\" [value] = \"dep.id\">\r\n              {{dep.id}} - {{dep.name}}\r\n            </option>\r\n          </select></div><br> <p>Selected department is {{newEmpDepNo}}</p>\r\n\r\n\r\n       <button class=\"btn-primary\" ngbButtonLabel  type=\"submit\" >Add new employee</button>\r\n    </form>\r\n    \r\n    <hr>\r\n    \r\n  \r\n    <!--form for changing employee details-->   \r\n   <h3>Select the employee number that you want to change his/her details:</h3>\r\n   \r\n   \r\n   \r\n    <ul class=\"employeesList\">\r\n      <li *ngFor=\"let employee of employees\">\r\n          <a routerLink=\"/employee-detail/{{employee.id}}\">\r\n          <span class=\"badge\">{{employee.id}}\r\n          </span>{{employee.first_name}}\r\n          </a>\r\n      </li> \r\n  </ul>\r\n   <hr>\r\n    \r\n\r\n\r\n    <!--form for showing employee details-->\r\n\r\n    <h3>Select the employee number that you want to view his/her details:</h3>\r\n   \r\n      <select class=\"btn btn-outline-primary\" [(ngModel)]=\"selectedEmpNo2\">\r\n        <option *ngFor=\"let emp of employees\" [value] = \"emp.id\">\r\n          {{emp.id}} - {{emp.first_name}}\r\n        </option>\r\n      </select>\r\n     <br><br> <button class=\"btn-primary\" ngbButtonLabel (click)=\"ViewEmployeeDetail()\">View Details</button>\r\n      <br><br><app-employee-details2 [Emp]=\"selectedEmp\"></app-employee-details2>\r\n       \r\n      \r\n      <hr>\r\n    <!--search-->\r\n    <div>\r\n    <h3>Search for an employee by entering his or her name:</h3>\r\n    <input class=\"form-control mb-2\" placeholder=\"Andreea...\" type=\"text\" [(ngModel)]=\"searchText\" >\r\n      <br><button  class=\"btn-primary\" ngbButtonLabel (click)=\"SearchEmployeeByName()\">Search</button>\r\n    </div><br>\r\n    <app-employee-search [filteredEmployees]=\"filteredEmployees\"></app-employee-search>\r\n\r\n    \r\n   \r\n</body>\r\n</html>\r\n   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-detail/task-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-detail/task-detail.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"task\">\r\n\r\n    <div>{{task.name | uppercase}} Details</div>\r\n    <div><span>id: </span>{{task.id}}</div>\r\n    <div>\r\n      <label>name:\r\n        <mat-form-field><input matInput [(ngModel)]=\"task.name\"/></mat-form-field>\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  <button (click)=\"goBack()\">go back</button>\r\n  <button (click)=\"saveT()\">save</button>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-search/task-search.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-search/task-search.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf = \"filteredTasks\">\r\n    \r\n    <ul class=\"tasks\">\r\n        <li *ngFor=\"let task of tasks\">\r\n          <span class=\"badge\">{{task.id}}</span> {{task.name}} executed by: {{task.employee}} - department:\r\n          {{task.department}}-by July\r\n        </li>\r\n      </ul>\r\n\r\n    </div> -->\r\n\r\n    <div id=\"search-component\">\r\n        <h4><label for=\"search-box\">Task Search</label></h4>\r\n      \r\n        <input #searchBox id=\"search-box\" (input)=\"search(searchBox.value)\" />\r\n      \r\n        <ul class=\"search-result\">\r\n          <li *ngFor=\"let task of tasks$ | async\" >\r\n            <a routerLink=\"/task-det/{{task.id}}\">\r\n              {{task.name}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <!DOCTYPE html>\r\n<html>\r\n\r\n<body> -->\r\n\r\n\r\n  <!-- <h2>My tasks</h2>\r\n  <tr class =\"tasks\" *ngFor=\"let task of tasks\">\r\n    <td> {{task.id}}</td>\r\n    <td> {{task.name}}</td>\r\n    <td>\r\n      <table >\r\n         <tr>\r\n           <td *ngFor=\"let employee of employees\">{{employee.empNo}} {{employee.empName}}</td>\r\n         </tr>\r\n      </table>\r\n    </td>\r\n    <td> {{item.fisrt}}</td>\r\n    <td> {{item.second}}</td>\r\n</tr> -->\r\n  <!-- <ul class=\"tasks\">\r\n    <li *ngFor=\"let task of tasks\">\r\n\r\n      <span class=\"badge\">{{task.id}}</span> {{task.name}} executed by: {{task.employee}} - department:\r\n      {{task.department}}-by July\r\n    </li>\r\n  </ul> -->\r\n  <div class=\"mat-headline\"><b>My tasks</b></div>\r\n\r\n  <ul class=\"tasks\">\r\n      <li *ngFor=\"let task of tasks\" [class.selected]=\"task === selectedTask\">\r\n          <a routerLink=\"/task-det/{{task.id}}\">\r\n          <span class=\"badge\">{{task.id}}\r\n          </span>{{task.name}}\r\n          </a>\r\n          <button class=\"delete\" title=\"delete task\" (click)=\"delete(task)\">x</button>\r\n      </li> \r\n  </ul>\r\n\r\n  <div>\r\n      <div class=\"mat-title\">Create new task</div>\r\n      <input #taskName matInput [(ngModel)]=\"newName\" placeholder=\"Task name\"><br>\r\n      <input #taskName matInput [(ngModel)]=\"dueDate\" placeholder=\"due date\"><br>\r\n\r\n      <label>Department: </label><br>\r\n      <select class=\"btn btn-outline-primary\" [(ngModel)]='newDepNo' name=\"EmpDep\">\r\n            <option *ngFor=\"let dep of departments\" [value] = \"dep.id\">\r\n              {{dep.id}} - {{dep.name}}\r\n            </option>\r\n       </select><br>\r\n      <!--<p>selected department id is {{newDepNo}}</p><br>\r\n      <label>Employees: </label><br>\r\n      <select class=\"btn btn-outline-primary\" [(ngModel)]='newEmpId' name=\"EmpDep\">\r\n            <option *ngFor=\"let emp of employees\" [value] = \"emp.id\">\r\n              {{emp.id}} - {{emp.first_name}}\r\n            </option>\r\n      </select><br>\r\n      <p>selected employee id is {{newEmpId}}</p>-->\r\n      <button mat-raised-button (click)=\"addT()\">Create</button><br><br>  \r\n     \r\n  </div>\r\n\r\n \r\n\r\n  <div>\r\n      <div class=\"mat-title\">Search for task</div>\r\n      <input style=\"padding:8px\" [(ngModel)]=\"value\" placeholder=\"Search for task by name\"/>&nbsp;\r\n      <button mat-raised-button (click)=\"onTest(value)\">Search</button><br>\r\n    </div>\r\n\r\n  <!--form for adding task-->\r\n  \r\n  <!-- <form (submit)=\"AddNewTask()\">\r\n    <label>Task Number: </label><input [(ngModel)]='newTaskNo' class=\"NewEmployeekNo\" type=\"text\" name=\"TaskNo\"\r\n      placeholder=\"New task number...\"><br>\r\n    <label>Task Name: </label><input [(ngModel)]='newTaskName' class=\"NewName\" type=\"text\" name=\"Name\"\r\n      placeholder=\"New task name...\"><br>\r\n      <label>Employee assigned: </label><input [(ngModel)]='empName' class=\"NewEmployeeAssigned\" type=\"text\" name=\"EmployeeAss\"\r\n      placeholder=\"Employee's name...\"><br>\r\n      <label>Department: </label><input [(ngModel)]='depName' class=\"NewDepartment\" type=\"text\" name=\"DepartmentAss\"\r\n      placeholder=\"Department...\"><br>\r\n    <button class=\"button\" type=\"submit\">Add new task</button>\r\n  </form> -->\r\n  \r\n  <!--form for changing tasks details-->\r\n\r\n  <!-- <form (submit)=\"ChangeTaskName(selectedTask)\">\r\n    <label>New name: </label> <input class=\"tbChangeName\" type=\"text\" [(ngModel)]='changedTaskName' name=\"changeNameId\"\r\n      placeholder=\"Change Task Name...\">\r\n    &nbsp;&nbsp;\r\n    <button class=\"button\" type=\"submit\">Change</button>\r\n  </form> -->\r\n\r\n  \r\n\r\n\r\n  <!-- deleting a task -->\r\n \r\n\r\n<!--search-->\r\n<!-- <div>\r\n  <h3>Search for a task by entering its name:</h3>\r\n  <input class=\"form-control mb-2\" placeholder=\"....\" type=\"text\" [(ngModel)]=\"searchText\" >\r\n    <br><button  class=\"btn-primary\" ngbButtonLabel (click)=\"SearchTaskByName()\">Search</button>\r\n  </div><br>\r\n  <app-task-search [filteredTasks]=\"filteredTasks\"></app-task-search> -->\r\n   <!-- <h3>Delete the last task:</h3> -->\r\n\r\n\r\n    <!-- my previous code -->\r\n\r\n\r\n   <!-- <div>\r\n\r\n      <div class=\"mat-title\">Create new task</div>\r\n    <mat-form-field><input matInput [(ngModel)]=\"newTaskNo\" placeholder=\"id\"></mat-form-field>&nbsp;\r\n    <mat-form-field><input matInput [(ngModel)]=\"newTaskName\" placeholder=\"name\"></mat-form-field>&nbsp;\r\n    <mat-form-field><input matInput [(ngModel)]=\"empName\" placeholder=\"employee\"></mat-form-field>&nbsp;\r\n    <mat-form-field><input matInput [(ngModel)]=\"depName\" placeholder=\"department\"></mat-form-field>&nbsp;\r\n      <button mat-raised-button\r\n        (click)=\"onSelect1({id: newTaskNo, name: newTaskName, employee: empName, department: depName})\">Create</button>\r\n    </div>\r\n    <br>\r\n  \r\n    <!-dropdownbox for task number-->\r\n    <!-- <div class=\"mat-title\">Select the task number you want to change the name for:</div>\r\n  \r\n    <select class=\"dropDownBox\" [(ngModel)]=\"selectedTaskNo\">\r\n      <option *ngFor=\"let task of tasks\" [value]=\"task.id\">\r\n        {{task.id}}\r\n      </option>\r\n    </select>\r\n    <br>The selected task number is: {{selectedTaskNo}}\r\n   -->\r\n\r\n  \r\n<!--   \r\n   <div>\r\n      <label>New name: </label> <mat-form-field><input matInput [(ngModel)]='changedTaskName' placeholder=\"Change Task Name...\">\r\n    </mat-form-field>&nbsp;\r\n      <button  mat-raised-button (click)=\"ChangeTaskName(selectedTaskNo)\">Change</button>\r\n    </div> -->\r\n\r\n<!-- \r\n   <div class=\"mat-title\">Delete the last task:</div>\r\n   <select [(ngModel)]=\"taskToDelete\">\r\n     <option *ngFor=\"let task of tasks\">\r\n       {{task.name}}\r\n     </option>\r\n   </select>\r\n \r\n   <button mat-raised-button (click)=\"onSelect2(taskToDelete)\">Delete</button>\r\n   <p><span>You selected the task: </span>{{taskToDelete}}</p>\r\n   <br>\r\n \r\n   <br> -->\r\n\r\n\r\n  <!-- <div>\r\n    <div class=\"mat-title\">Search for task</div>\r\n    <input style=\"padding:8px\" [(ngModel)]=\"value\" placeholder=\"Search for task by name\"/>&nbsp;\r\n    <button mat-raised-button (click)=\"SearchTask(value)\">Search</button><br>\r\n  </div>\r\n  \r\n  <app-task-detail [task]=selectedTask></app-task-detail>research this \r\n   --> \r\n\r\n\r\n<!-- \r\n</body>\r\n\r\n</html> -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./departments/departments.component */ "./src/app/departments/departments.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");
/* harmony import */ var _department_detail_department_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./department-detail/department-detail.component */ "./src/app/department-detail/department-detail.component.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");










const routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
    { path: 'employees', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_3__["EmployeesComponent"] },
    { path: 'department', component: _departments_departments_component__WEBPACK_IMPORTED_MODULE_5__["DepartmentsComponent"] },
    { path: 'task', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"] },
    { path: 'employee-detail/:id', component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeDetailsComponent"] },
    { path: 'detail/:id', component: _department_detail_department_detail_component__WEBPACK_IMPORTED_MODULE_8__["DepartmentDetailComponent"] },
    { path: 'task-det/:id', component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_9__["TaskDetailComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table,td,tr,th\r\n{\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n}\r\nh1 {\r\n    font-size: 1.2em;\r\n    margin-bottom: 0;\r\n  }\r\nh2 {\r\n    font-size: 2em;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n  }\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\nnav a:visited, a:link {\r\n    color: #334953;\r\n  }\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #cfd8dc;\r\n  }\r\nnav a.active {\r\n    color: #039be5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjtBQUNBO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsY0FBYztFQUNoQjtBQUNBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjtBQUNBO0lBQ0UsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUsdGQsdHIsdGhcclxue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcbiAgbmF2IGEge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgbmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcclxuICAgIGNvbG9yOiAjMzM0OTUzO1xyXG4gIH1cclxuICBuYXYgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAzOWJlNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbiAgfVxyXG4gIG5hdiBhLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzAzOWJlNTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Web 2 Project';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _departments_departments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./departments/departments.component */ "./src/app/departments/departments.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employee-search/employee-search.component */ "./src/app/employee-search/employee-search.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _employee_search_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./employee-search.pipe */ "./src/app/employee-search.pipe.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _employee_details2_employee_details2_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./employee-details2/employee-details2.component */ "./src/app/employee-details2/employee-details2.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _department_detail_department_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./department-detail/department-detail.component */ "./src/app/department-detail/department-detail.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./task-detail/task-detail.component */ "./src/app/task-detail/task-detail.component.ts");
/* harmony import */ var _task_search_task_search_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./task-search/task-search.component */ "./src/app/task-search/task-search.component.ts");
/* harmony import */ var _department_search_department_search_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./department-search/department-search.component */ "./src/app/department-search/department-search.component.ts");
/* harmony import */ var _employee_details3_employee_details3_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./employee-details3/employee-details3.component */ "./src/app/employee-details3/employee-details3.component.ts");





















 //





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _departments_departments_component__WEBPACK_IMPORTED_MODULE_6__["DepartmentsComponent"],
            _employees_employees_component__WEBPACK_IMPORTED_MODULE_7__["EmployeesComponent"],
            _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_8__["TasksComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            _employee_search_employee_search_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeSearchComponent"],
            _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeDetailsComponent"],
            _employee_search_pipe__WEBPACK_IMPORTED_MODULE_16__["EmployeeSearchPipe"],
            _employee_details2_employee_details2_component__WEBPACK_IMPORTED_MODULE_18__["EmployeeDetails2Component"],
            _department_detail_department_detail_component__WEBPACK_IMPORTED_MODULE_20__["DepartmentDetailComponent"],
            _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_22__["TaskDetailComponent"],
            _task_search_task_search_component__WEBPACK_IMPORTED_MODULE_23__["TaskSearchComponent"],
            _department_search_department_search_component__WEBPACK_IMPORTED_MODULE_24__["DepartmentSearchComponent"],
            _employee_details3_employee_details3_component__WEBPACK_IMPORTED_MODULE_25__["EmployeeDetails3Component"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n    float: left;\r\n    padding-right: 20px;\r\n    padding-bottom: 20px;\r\n  }\r\n[class*='col-']:last-of-type {\r\n    padding-right: 0;\r\n  }\r\na {\r\n    text-decoration: none;\r\n  }\r\n*, *:after, *:before {\r\n    box-sizing: border-box;\r\n  }\r\nh3 {\r\n    text-align: center;\r\n    margin-bottom: 0;\r\n  }\r\nh4 {\r\n    position: relative;\r\n  }\r\n.grid {\r\n    margin: 0;\r\n  }\r\n.col-1-4 {\r\n    width: 25%;\r\n  }\r\n.module {\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: #eee;\r\n    max-height: 120px;\r\n    min-width: 120px;\r\n    background-color: #3f525c;\r\n    border-radius: 2px;\r\n  }\r\n.module:hover {\r\n    background-color: #eee;\r\n    cursor: pointer;\r\n    color: #607d8b;\r\n  }\r\n.grid-pad {\r\n    padding: 10px 0;\r\n  }\r\n.grid-pad > [class*='col-']:last-of-type {\r\n    padding-right: 20px;\r\n  }\r\n@media (max-width: 600px) {\r\n    .module {\r\n      font-size: 10px;\r\n      max-height: 75px; }\r\n  }\r\n@media (max-width: 1024px) {\r\n    .grid {\r\n      margin: 0;\r\n    }\r\n    .module {\r\n      min-width: 60px;\r\n    }\r\n  }\r\n.someEmpTitle{\r\n    margin: 10px;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRDQUE0QztBQUM1QztJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCO0FBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNBO0lBR0Usc0JBQXNCO0VBQ3hCO0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0E7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsY0FBYztFQUNoQjtBQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0E7SUFDRTtNQUNFLGVBQWU7TUFDZixnQkFBZ0IsRUFBRTtFQUN0QjtBQUNBO0lBQ0U7TUFDRSxTQUFTO0lBQ1g7SUFDQTtNQUNFLGVBQWU7SUFDakI7RUFDRjtBQUNBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRGFzaGJvYXJkQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbltjbGFzcyo9J2NvbC0nXSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgW2NsYXNzKj0nY29sLSddOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgKiwgKjphZnRlciwgKjpiZWZvcmUge1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgaDQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuZ3JpZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5jb2wtMS00IHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5tb2R1bGUge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTI1YztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgLm1vZHVsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICM2MDdkOGI7XHJcbiAgfVxyXG4gIC5ncmlkLXBhZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIC5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubW9kdWxlIHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiA3NXB4OyB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLm1vZHVsZSB7XHJcbiAgICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNvbWVFbXBUaXRsZXtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../department.service */ "./src/app/department.service.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");





let DashboardComponent = class DashboardComponent {
    constructor(employeeService, departmentservice, taskservice) {
        //this.employees=this.getEmployees();
        this.employeeService = employeeService;
        this.departmentservice = departmentservice;
        this.taskservice = taskservice;
    }
    ngOnInit() {
        this.getEmployees();
        this.getDepartments();
        this.getTasks();
    }
    getEmployees() {
        this.employeeService.GetListOfEmployees().subscribe(emps => this.employees = emps.slice(1, 5));
    }
    getDepartments() {
        this.departmentservice.getDepartments()
            .subscribe(departments => this.departments = departments.slice(1, 5));
    }
    getTasks() {
        this.taskservice.getTasks()
            .subscribe(tasks => this.tasks = tasks.slice(1, 5));
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: _department_service__WEBPACK_IMPORTED_MODULE_3__["DepartmentService"] },
    { type: _task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/department-detail/department-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/department-detail/department-detail.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\r\n    display: inline-block;\r\n    width: 3em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n  }\r\n  input {\r\n    height: 2em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n  }\r\n  button {\r\n    margin-top: 20px;\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n  }\r\n  button:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n  button:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0bWVudC1kZXRhaWwvZGVwYXJ0bWVudC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtFQUNkO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvZGVwYXJ0bWVudC1kZXRhaWwvZGVwYXJ0bWVudC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgICBtYXJnaW46IC41ZW0gMDtcclxuICAgIGNvbG9yOiAjNjA3RDhCO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC40ZW07XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY3Vyc29yOiBoYW5kO1xyXG4gIH1cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxuICB9XHJcbiAgYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBjb2xvcjogI2NjYztcclxuICAgIGN1cnNvcjogYXV0bztcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/department-detail/department-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/department-detail/department-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: DepartmentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentDetailComponent", function() { return DepartmentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../department.service */ "./src/app/department.service.ts");





let DepartmentDetailComponent = class DepartmentDetailComponent {
    constructor(route, departmentservice, location) {
        this.route = route;
        this.departmentservice = departmentservice;
        this.location = location;
    }
    ngOnInit() {
        this.getDepartment();
    }
    getDepartment() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.departmentservice.getDepartment(id)
            .subscribe(department => this.department = department);
    }
    save() {
        this.departmentservice.updateDepartment(this.department)
            .subscribe(() => this.goBack());
    }
    goBack() {
        this.location.back();
    }
};
DepartmentDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DepartmentDetailComponent.prototype, "department", void 0);
DepartmentDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-department-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./department-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/department-detail/department-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./department-detail.component.css */ "./src/app/department-detail/department-detail.component.css")).default]
    })
], DepartmentDetailComponent);



/***/ }),

/***/ "./src/app/department-search/department-search.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/department-search/department-search.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".departments {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n  .departments li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 2em;\r\n    border-radius: 4px;\r\n  }\r\n  .departments li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .departments li.selected {\r\n    background-color: #CFD8DC;\r\n    color: white;\r\n  }\r\n  .departments li.selected:hover {\r\n    background-color: #BBD8DC;\r\n    color: white;\r\n  }\r\n  .departments a {\r\n    color: #333;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: block;\r\n    width: 250px;\r\n  }\r\n  .departments a:hover {\r\n    color:#607D8B;\r\n  }\r\n  .departments .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color:#405061;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 2.4em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0bWVudC1zZWFyY2gvZGVwYXJ0bWVudC1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7RUFFQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7RUFFQTtJQUNFLGFBQWE7RUFDZjtFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7RUFDNUIiLCJmaWxlIjoic3JjL2FwcC9kZXBhcnRtZW50LXNlYXJjaC9kZXBhcnRtZW50LXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlcGFydG1lbnRzIHtcclxuICAgIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxNWVtO1xyXG4gIH1cclxuICAuZGVwYXJ0bWVudHMgbGkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgICBtYXJnaW46IC41ZW07XHJcbiAgICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLmRlcGFydG1lbnRzIGxpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjA3RDhCO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgIGxlZnQ6IC4xZW07XHJcbiAgfVxyXG4gIC5kZXBhcnRtZW50cyBsaS5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZGVwYXJ0bWVudHMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5kZXBhcnRtZW50cyBhIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXBhcnRtZW50cyBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiM2MDdEOEI7XHJcbiAgfVxyXG5cclxuICAuZGVwYXJ0bWVudHMgLmJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xcHg7XHJcbiAgICB0b3A6IC00cHg7XHJcbiAgICBoZWlnaHQ6IDIuNGVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/department-search/department-search.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/department-search/department-search.component.ts ***!
  \******************************************************************/
/*! exports provided: DepartmentSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentSearchComponent", function() { return DepartmentSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DepartmentSearchComponent = class DepartmentSearchComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DepartmentSearchComponent.prototype, "filteredDepartments", void 0);
DepartmentSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-department-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./department-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/department-search/department-search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./department-search.component.css */ "./src/app/department-search/department-search.component.css")).default]
    })
], DepartmentSearchComponent);



/***/ }),

/***/ "./src/app/department.service.ts":
/*!***************************************!*\
  !*** ./src/app/department.service.ts ***!
  \***************************************/
/*! exports provided: DepartmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentService", function() { return DepartmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _mock_departments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-departments */ "./src/app/mock-departments.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let DepartmentService = class DepartmentService {
    constructor(http) {
        this.http = http;
        this.departmentsUrl = 'http://i875395.hera.fhict.nl/api/406227/department';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    getDepartments() {
        return this.http.get(this.departmentsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('getDepartments', [])));
    }
    getDepartment(id) {
        const url = `${this.departmentsUrl}/?id=${id}`;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError(`getDepartment id=${id}`)));
    }
    /** PUT: update the department on the server */
    updateDepartment(dep) {
        const url = `${this.departmentsUrl}/?id=${dep.id}`;
        return this.http.put(url, dep, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('updateDepartment')));
    }
    addDepartment(department) {
        return this.http.post(this.departmentsUrl, department, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('addDepartment')));
    }
    deleteDepartment(department) {
        const id = typeof department === 'number' ? department : department.id;
        const url = `${this.departmentsUrl}/?id=${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError('deleteDepartment')));
    }
    GetDepsArray() {
        this.departments = _mock_departments__WEBPACK_IMPORTED_MODULE_2__["DEPARTMENTS"];
        return this.departments;
    }
    getDepartmentById(id) {
        for (var i = 0; i < this.departments.length; i++) {
            if (this.departments[i].id == id) {
                return this.departments[i];
            }
        }
    }
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
DepartmentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
DepartmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DepartmentService);



/***/ }),

/***/ "./src/app/department.ts":
/*!*******************************!*\
  !*** ./src/app/department.ts ***!
  \*******************************/
/*! exports provided: Department */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Department", function() { return Department; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Department {
    constructor(id, name, building, emp) {
        this.id = id;
        this.name = name;
        this.building = building;
        this.emp = emp;
    }
}


/***/ }),

/***/ "./src/app/departments/departments.component.css":
/*!*******************************************************!*\
  !*** ./src/app/departments/departments.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.departments {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n  .departments li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 2em;\r\n    border-radius: 4px;\r\n  }\r\n  .departments li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .departments li.selected {\r\n    background-color: #CFD8DC;\r\n    color: white;\r\n  }\r\n  .departments li.selected:hover {\r\n    background-color: #BBD8DC;\r\n    color: white;\r\n  }\r\n  .departments a {\r\n    color: #333;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: block;\r\n    width: 250px;\r\n  }\r\n  .departments a:hover {\r\n    color:#607D8B;\r\n  }\r\n  .departments .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color:#405061;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 2.4em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n  button {\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n    font-family: Arial;\r\n  }\r\n  button:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n  button.delete {\r\n    position: relative;\r\n    left: 230px;\r\n    top: -36px;\r\n    background-color: gray !important;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0bWVudHMvZGVwYXJ0bWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0VBRUE7SUFDRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtFQUNkO0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDRCQUE0QjtJQUM1Qix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsU0FBUztJQUNULGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsMEJBQTBCO0VBQzVCO0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7RUFDcEI7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsaUNBQWlDO0lBQ2pDLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnRzL2RlcGFydG1lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmRlcGFydG1lbnRzIHtcclxuICAgIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxNWVtO1xyXG4gIH1cclxuICAuZGVwYXJ0bWVudHMgbGkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgICBtYXJnaW46IC41ZW07XHJcbiAgICBwYWRkaW5nOiAuM2VtIDA7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgLmRlcGFydG1lbnRzIGxpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjNjA3RDhCO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICAgIGxlZnQ6IC4xZW07XHJcbiAgfVxyXG4gIC5kZXBhcnRtZW50cyBsaS5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZGVwYXJ0bWVudHMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0JCRDhEQztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5kZXBhcnRtZW50cyBhIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXBhcnRtZW50cyBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiM2MDdEOEI7XHJcbiAgfVxyXG5cclxuICAuZGVwYXJ0bWVudHMgLmJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDA1MDYxO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IC0xcHg7XHJcbiAgICB0b3A6IC00cHg7XHJcbiAgICBoZWlnaHQ6IDIuNGVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY3Vyc29yOiBoYW5kO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIH1cclxuICBcclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxuICB9XHJcbiAgXHJcbiAgYnV0dG9uLmRlbGV0ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyMzBweDtcclxuICAgIHRvcDogLTM2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/departments/departments.component.ts":
/*!******************************************************!*\
  !*** ./src/app/departments/departments.component.ts ***!
  \******************************************************/
/*! exports provided: DepartmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentsComponent", function() { return DepartmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../department.service */ "./src/app/department.service.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let DepartmentsComponent = class DepartmentsComponent {
    constructor(departmentservice, employeeService, location) {
        this.departmentservice = departmentservice;
        this.employeeService = employeeService;
        this.location = location;
        this.value = "";
        this.newId = 0;
        this.newName = "";
        this.newBuilding = "";
        this.filteredDepartments = [];
    }
    ngOnInit() {
        this.getDepartments();
        this.getEmployees();
    }
    onSelect(department) {
        this.selectedDepartment = department;
    }
    add(name, building) {
        name = name.trim();
        if (!name) {
            return;
        }
        this.departmentservice.addDepartment({ name: name, emp: [], building: building })
            .subscribe(department => {
            this.departments.push(department);
        });
    }
    delete(department) {
        this.departments = this.departments.filter(d => d !== department);
        this.departmentservice.deleteDepartment(department).subscribe();
    }
    search(searchText) {
        for (var i = 0; i < this.departments.length; i++) {
            if (this.departments[i].name.toLowerCase().includes(searchText.toLowerCase())) {
                this.filteredDepartments.push(this.departments[i]);
            }
        }
    }
    ChangeEmpDetail() {
        this.employeeService.changeEmpDetail(this.selectedEmpNo, this.changedEmpDepNo).subscribe(() => alert("Employee added successfully"));
    }
    DeleteEmpDetail() {
        this.employeeService.deleteEmpDetail(this.selectedEmpNo, this.changedEmpDepNo).subscribe(() => alert("Employee deleted successfully"));
    }
    getDepartments() {
        this.departmentservice.getDepartments().subscribe(departments => this.departments = departments);
    }
    getEmployees() {
        this.employeeService.GetListOfEmployees().subscribe(employees => this.employees = employees);
    }
    GoBack() {
        this.location.back();
    }
    sortbyId() {
        this.departments.sort((a, b) => (a.id) > (b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
    }
    sortbyName() {
        this.departments.sort((a, b) => (a.name) > (b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    }
};
DepartmentsComponent.ctorParameters = () => [
    { type: _department_service__WEBPACK_IMPORTED_MODULE_2__["DepartmentService"] },
    { type: _employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
DepartmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-departments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./departments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/departments/departments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./departments.component.css */ "./src/app/departments/departments.component.css")).default]
    })
], DepartmentsComponent);



/***/ }),

/***/ "./src/app/employee-details/employee-details.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#employeeDetails{\r\n    margin: 10px;\r\n    margin-right: 1000px;\r\n}\r\nbutton {\r\n    margin-top: 20px;\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtZGV0YWlscy9lbXBsb3llZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtFQUNkO0FBQ0E7SUFDRSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1kZXRhaWxzL2VtcGxveWVlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlbXBsb3llZURldGFpbHN7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMDBweDtcclxufVxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGN1cnNvcjogaGFuZDtcclxuICB9XHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbiAgfVxyXG4gIl19 */");

/***/ }),

/***/ "./src/app/employee-details/employee-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.ts ***!
  \****************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../department.service */ "./src/app/department.service.ts");






let EmployeeDetailsComponent = class EmployeeDetailsComponent {
    constructor(route, employeeService, location, departmentService) {
        this.route = route;
        this.employeeService = employeeService;
        this.location = location;
        this.departmentService = departmentService;
        this.employee = this.GetEmpByNo();
    }
    ngOnInit() {
        this.GetEmpByNo();
        this.getListDepartments();
    }
    GetEmpByNo() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.employee = this.employeeService.GetEmployeeByNr(id);
        return this.employee;
    }
    save() {
        this.employeeService.updateEmployee(this.employee)
            .subscribe(() => this.GoBack());
    }
    getListDepartments() {
        this.departmentService.getDepartments().subscribe(depList => this.departments = depList);
    }
    GoBack() {
        this.location.back();
    }
};
EmployeeDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _department_service__WEBPACK_IMPORTED_MODULE_5__["DepartmentService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EmployeeDetailsComponent.prototype, "employee", void 0);
EmployeeDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details/employee-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-details.component.css */ "./src/app/employee-details/employee-details.component.css")).default]
    })
], EmployeeDetailsComponent);



/***/ }),

/***/ "./src/app/employee-details2/employee-details2.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/employee-details2/employee-details2.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#employeeDetails2{\r\n    \r\n    margin-right: 50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtZGV0YWlsczIvZW1wbG95ZWUtZGV0YWlsczIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1kZXRhaWxzMi9lbXBsb3llZS1kZXRhaWxzMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2VtcGxveWVlRGV0YWlsczJ7XHJcbiAgICBcclxuICAgIG1hcmdpbi1yaWdodDogNTAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/employee-details2/employee-details2.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/employee-details2/employee-details2.component.ts ***!
  \******************************************************************/
/*! exports provided: EmployeeDetails2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetails2Component", function() { return EmployeeDetails2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmployeeDetails2Component = class EmployeeDetails2Component {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EmployeeDetails2Component.prototype, "Emp", void 0);
EmployeeDetails2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-details2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-details2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details2/employee-details2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-details2.component.css */ "./src/app/employee-details2/employee-details2.component.css")).default]
    })
], EmployeeDetails2Component);



/***/ }),

/***/ "./src/app/employee-details3/employee-details3.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/employee-details3/employee-details3.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLWRldGFpbHMzL2VtcGxveWVlLWRldGFpbHMzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/employee-details3/employee-details3.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/employee-details3/employee-details3.component.ts ***!
  \******************************************************************/
/*! exports provided: EmployeeDetails3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetails3Component", function() { return EmployeeDetails3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmployeeDetails3Component = class EmployeeDetails3Component {
    constructor() { }
    ngOnInit() {
    }
};
EmployeeDetails3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-details3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-details3.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-details3/employee-details3.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-details3.component.css */ "./src/app/employee-details3/employee-details3.component.css")).default]
    })
], EmployeeDetails3Component);



/***/ }),

/***/ "./src/app/employee-search.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/employee-search.pipe.ts ***!
  \*****************************************/
/*! exports provided: EmployeeSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSearchPipe", function() { return EmployeeSearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");



let EmployeeSearchPipe = class EmployeeSearchPipe {
    constructor(employeeService) {
        this.employeeService = employeeService;
        this.empList = employeeService.GetListOfEmployees();
    }
    transform(employees, searchText) {
    }
};
EmployeeSearchPipe.ctorParameters = () => [
    { type: _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }
];
EmployeeSearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EmployeeSearchPipe);



/***/ }),

/***/ "./src/app/employee-search/employee-search.component.css":
/*!***************************************************************!*\
  !*** ./src/app/employee-search/employee-search.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLXNlYXJjaC9lbXBsb3llZS1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/employee-search/employee-search.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee-search/employee-search.component.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeSearchComponent", function() { return EmployeeSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmployeeSearchComponent = class EmployeeSearchComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], EmployeeSearchComponent.prototype, "filteredEmployees", void 0);
EmployeeSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employee-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employee-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-search/employee-search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employee-search.component.css */ "./src/app/employee-search/employee-search.component.css")).default]
    })
], EmployeeSearchComponent);



/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _department__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department */ "./src/app/department.ts");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee */ "./src/app/employee.ts");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./department.service */ "./src/app/department.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let EmployeeService = class EmployeeService {
    constructor(departmentService, http) {
        this.departmentService = departmentService;
        this.http = http;
        this.employee = _employee__WEBPACK_IMPORTED_MODULE_3__["Employee"];
        this.department = _department__WEBPACK_IMPORTED_MODULE_2__["Department"];
        this.employees = [];
        this.employeesUrl = 'http://i875395.hera.fhict.nl/api/406227/employee';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        // this.departments = departmentService.GetDepsArray();
        this.GetListOfEmployees().subscribe((employees) => { this.employees = employees; });
    }
    GetListOfEmployees() {
        return this.http.get(this.employeesUrl);
    }
    GetEmployeeByNr(empNo) {
        for (var i = 0; i < this.employees.length; i++) {
            if (this.employees[i].id == empNo) {
                return this.employees[i];
            }
        }
    }
    GetEmpById(id) {
        const url = `${this.employeesUrl}/?id=${id}`;
        return this.http.get(url);
    }
    AddNewEmployee(newEmp) {
        // this.employees.push(newEmp);
        return this.http.post(this.employeesUrl, newEmp, this.httpOptions);
    }
    ChangeEmpDetail(selectedEmpNo, changedEmpFName) {
        let tempEmp = this.GetEmployeeByNr(selectedEmpNo);
        const url = `${this.employeesUrl}/?id=${selectedEmpNo}`;
        if (tempEmp != null) {
            if (changedEmpFName != null) {
                tempEmp.first_name = changedEmpFName;
                // tempEmp.last_name = changedEmpLName;
                // tempEmp.department_id = changedEmpDepNo;
                // tempEmp.birth_date=birthDate;
                return this.http.put(url, tempEmp, this.httpOptions);
            }
            // else if(changedEmpFName==null || changedEmpLName == null || birthDate ==null){
            //   tempEmp.department_id = changedEmpDepNo;
            //   return this.http.put<Employee>(url, tempEmp, this.httpOptions);
            // }
        }
    }
    RemoveEmp2(emp) {
        const id = emp.id;
        const url = `${this.employeesUrl}/?id=${id}`;
        this.employees.filter(el => el !== emp);
        return this.http.delete(url, this.httpOptions);
    }
    ViewEmployeeDetail(selectedEmpNo) {
        // let tempEmp = this.GetEmployeeByNr(selectedEmpNo);
        let tempEmp = this.GetEmpById(selectedEmpNo);
        if (tempEmp != null) {
            return tempEmp;
        }
        this.http.post(this.employeesUrl, tempEmp, this.httpOptions).subscribe(emp => { this.employees.push(emp); });
    }
    changeEmpDetail(selectedEmpNo, changedEmpDepNo) {
        let tempEmp = this.GetEmployeeByNr(selectedEmpNo);
        const url = `${this.employeesUrl}?id=${selectedEmpNo}`;
        if (tempEmp != null) {
            tempEmp.department_id = changedEmpDepNo;
            return this.http.put(url, tempEmp, this.httpOptions);
        }
    }
    deleteEmpDetail(selectedEmpNo, changedEmpDepNo) {
        let tempEmp = this.GetEmployeeByNr(selectedEmpNo);
        const url = `${this.employeesUrl}?id=${selectedEmpNo}`;
        if (tempEmp != null && tempEmp.department_id == changedEmpDepNo) {
            tempEmp.department_id = null;
            return this.http.put(url, tempEmp, this.httpOptions);
        }
    }
    SearchEmployeeByName(searchText) {
        let filteredEmps = [];
        for (var i = 0; i < this.employees.length; i++) {
            let searchName = this.employees[i].first_name.toLowerCase() + " " + this.employees[i].last_name.toLowerCase();
            if (this.employees[i].first_name.toLowerCase().includes(searchText.toLowerCase()) || this.employees[i].last_name.toLowerCase().includes(searchText.toLowerCase()) || searchName.toLowerCase().includes(searchText.toLowerCase())) {
                filteredEmps.push(this.employees[i]);
            }
        }
        return filteredEmps;
    }
    updateEmployee(emp) {
        const url = `${this.employeesUrl}/?id=${emp.id}`;
        return this.http.put(url, emp, this.httpOptions);
    }
};
EmployeeService.ctorParameters = () => [
    { type: _department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ "./src/app/employee.ts":
/*!*****************************!*\
  !*** ./src/app/employee.ts ***!
  \*****************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Employee {
    constructor(id, depId, firstName, lastName, birthDate) {
        this.id = id;
        this.first_name = firstName;
        this.last_name = lastName;
        this.department_id = depId;
        this.birth_date = birthDate;
    }
}


/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-responsive  #deleteButton{\r\ncolor:  white;\r\nbackground-color: red;\r\nborder-color: white;\r\n}\r\n#deleteEmpCells{\r\n    text-align: center\r\n}\r\nbody{\r\n    margin: 30px;\r\n    margin-bottom: 10px;\r\n}\r\n.employeesList {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n.employeesList li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 2em;\r\n    border-radius: 4px;\r\n  }\r\n.employeesList li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n.employeesList li.selected {\r\n    background-color: #CFD8DC;\r\n    color: white;\r\n  }\r\n.employeesList li.selected:hover {\r\n    background-color: #BBD8DC;\r\n    color: white;\r\n  }\r\n.employeesList a {\r\n    color: #333;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: block;\r\n    width: 250px;\r\n  }\r\n.employeesList a:hover {\r\n    color:#607D8B;\r\n  }\r\n.employeesList .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color:#405061;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 2.4em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n.btn-primary{\r\n margin: 5px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVzL2VtcGxveWVlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsYUFBYTtBQUNiLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7RUFDYjtBQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixVQUFVO0VBQ1o7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7QUFFQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7QUFFQTtJQUNFLGFBQWE7RUFDZjtBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7RUFDNUI7QUFDQTtDQUNELFdBQVc7RUFDViIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1yZXNwb25zaXZlICAjZGVsZXRlQnV0dG9ue1xyXG5jb2xvcjogIHdoaXRlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbmJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuI2RlbGV0ZUVtcENlbGxze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuYm9keXtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5lbXBsb3llZXNMaXN0IHtcclxuICAgIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxNWVtO1xyXG4gIH1cclxuICAuZW1wbG95ZWVzTGlzdCBsaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICAgIG1hcmdpbjogLjVlbTtcclxuICAgIHBhZGRpbmc6IC4zZW0gMDtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAuZW1wbG95ZWVzTGlzdCBsaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgICBsZWZ0OiAuMWVtO1xyXG4gIH1cclxuICAuZW1wbG95ZWVzTGlzdCBsaS5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZW1wbG95ZWVzTGlzdCBsaS5zZWxlY3RlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmVtcGxveWVlc0xpc3QgYSB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICAuZW1wbG95ZWVzTGlzdCBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiM2MDdEOEI7XHJcbiAgfVxyXG5cclxuICAuZW1wbG95ZWVzTGlzdCAuYmFkZ2Uge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0MDUwNjE7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogLTFweDtcclxuICAgIHRvcDogLTRweDtcclxuICAgIGhlaWdodDogMi40ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxuICB9XHJcbiAgLmJ0bi1wcmltYXJ5e1xyXG4gbWFyZ2luOiA1cHg7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../department.service */ "./src/app/department.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let EmployeesComponent = class EmployeesComponent {
    constructor(employeeService, departmentService, http) {
        this.employeeService = employeeService;
        this.departmentService = departmentService;
        this.http = http;
        this.header = "My Employees";
        this.employee = _employee__WEBPACK_IMPORTED_MODULE_2__["Employee"];
        // this.employees = employeeService.GetListOfEmployees();
        //this.departments = departmentService.GetDepsArray();
    }
    ngOnInit() {
        //this.selectedEmpNo;
        this.getListEmployees();
        this.getListDepartments();
    }
    getListEmployees() {
        this.employeeService.GetListOfEmployees().subscribe(empList => this.employees = empList);
    }
    getListDepartments() {
        this.departmentService.getDepartments().subscribe(depList => this.departments = depList);
    }
    GetEmployeeByNr() {
        this.employeeService.GetEmployeeByNr(this.selectedEmpNo);
    }
    AddNewEmployee() {
        // if(this.newEmpFirstName!=null && this.newEmpLastName != null){
        let newEmp = new _employee__WEBPACK_IMPORTED_MODULE_2__["Employee"](this.newEmpNo, this.newEmpDepNo, this.newEmpFirstName, this.newEmpLastName, this.birthDate);
        //this.employeeService.AddNewEmployee(newEmp);
        //this.employees.push(newEmp);
        //this.employeeService.AddNewEmployee(newEmp).subscribe(emp =>{this.employees.push(emp);});
        this.employeeService.AddNewEmployee(newEmp).subscribe(emp => {
            this.employees.push(emp);
        });
    }
    reloadPage() {
        window.location.reload();
    }
    GoBack() {
        this.location.back();
    }
    ChangeEmpDetail() {
        this.employeeService.ChangeEmpDetail(this.selectedEmpNo, this.changedEmpFName);
    }
    DeleteEmployee(emp) {
        // this.employeeService.DeleteEmployee(selectedId);
        this.employees = this.employees.filter(e => e !== emp);
        this.employeeService.RemoveEmp2(emp).subscribe();
    }
    ViewEmployeeDetail() {
        this.employeeService.ViewEmployeeDetail(this.selectedEmpNo2).subscribe(emp => this.selectedEmp = emp);
    }
    SearchEmployeeByName() {
        this.filteredEmployees = this.employeeService.SearchEmployeeByName(this.searchText);
    }
    sortbyId() {
        this.employees.sort((a, b) => (a.id) > (b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
    }
    sortbyFirstName() {
        this.employees.sort((a, b) => (a.first_name) > (b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0));
    }
    sortbyLastName() {
        this.employees.sort((a, b) => (a.last_name) > (b.last_name) ? 1 : ((b.last_name > a.last_name) ? -1 : 0));
    }
    sortbyDepartmentId() {
        this.employees.sort((a, b) => (a.department_id) > (b.department_id) ? 1 : ((b.department_id > a.department_id) ? -1 : 0));
    }
    sortbyBirthDate() {
        this.employees.sort((a, b) => (a.birth_date) > (b.birth_date) ? 1 : ((b.birth_date > a.birth_date) ? -1 : 0));
    }
};
EmployeesComponent.ctorParameters = () => [
    { type: _employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] },
    { type: _department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-employees',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./employees.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employees/employees.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")).default]
    })
], EmployeesComponent);



/***/ }),

/***/ "./src/app/mock-departments.ts":
/*!*************************************!*\
  !*** ./src/app/mock-departments.ts ***!
  \*************************************/
/*! exports provided: DEPARTMENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEPARTMENTS", function() { return DEPARTMENTS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mock_employees__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-employees */ "./src/app/mock-employees.ts");


const DEPARTMENTS = [
    { id: 1, name: 'HR', emp: [_mock_employees__WEBPACK_IMPORTED_MODULE_1__["EMPLOYEES"][0], _mock_employees__WEBPACK_IMPORTED_MODULE_1__["EMPLOYEES"][1]], building: '' },
    { id: 2, name: 'Data Analysis', emp: [_mock_employees__WEBPACK_IMPORTED_MODULE_1__["EMPLOYEES"][2]], building: '' },
    { id: 3, name: 'Finance', emp: [], building: '' },
    { id: 4, name: 'Marketing', emp: [], building: '' },
    { id: 5, name: 'IT', emp: [], building: '' },
    { id: 6, name: 'Sales', emp: [], building: '' },
    { id: 7, name: 'Business Development', emp: [], building: '' },
    { id: 8, name: 'Global Research', emp: [], building: '' },
    { id: 9, name: 'Services', emp: [], building: '' },
    { id: 10, name: 'Production', emp: [], building: '' }
];


/***/ }),

/***/ "./src/app/mock-employees.ts":
/*!***********************************!*\
  !*** ./src/app/mock-employees.ts ***!
  \***********************************/
/*! exports provided: EMPLOYEES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMPLOYEES", function() { return EMPLOYEES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const EMPLOYEES = [
//{empNo:1, empName: 'John', empDep: 'A'},
//{empNo:2, empName: 'Andreea', empDep: 'B'},
//{empNo:3, empName: 'Kien', empDep: 'C'},
//{empNo:4, empName: 'Trang', empDep: 'D'},
//{empNo:5, empName: 'Bruce', empDep: 'E'},
];


/***/ }),

/***/ "./src/app/task-detail/task-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("label {\r\n    display: inline-block;\r\n    width: 3em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n  }\r\n  input {\r\n    height: 2em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n  }\r\n  button {\r\n    margin-top: 20px;\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n  }\r\n  button:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n  button:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtFQUNkO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvdGFzay1kZXRhaWwvdGFzay1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAzZW07XHJcbiAgICBtYXJnaW46IC41ZW0gMDtcclxuICAgIGNvbG9yOiAjNjA3RDhCO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIGhlaWdodDogMmVtO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC40ZW07XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY3Vyc29yOiBoYW5kO1xyXG4gIH1cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxuICB9XHJcbiAgYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBjb2xvcjogI2NjYztcclxuICAgIGN1cnNvcjogYXV0bztcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/task-detail/task-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/task-detail/task-detail.component.ts ***!
  \******************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");





let TaskDetailComponent = class TaskDetailComponent {
    constructor(route, taskservice, location) {
        this.route = route;
        this.taskservice = taskservice;
        this.location = location;
    }
    ngOnInit() {
        this.getTask();
    }
    getTask() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.taskservice.getTask(id).subscribe(task => this.task = task);
        // this.task = this.taskservice.getTask2(id);
        //   return this.task;
    }
    goBack() {
        this.location.back();
    }
    saveT() {
        this.taskservice.updateTask(this.task)
            .subscribe(() => this.goBack());
    }
};
TaskDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaskDetailComponent.prototype, "task", void 0);
TaskDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-detail/task-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-detail.component.css */ "./src/app/task-detail/task-detail.component.css")).default]
    })
], TaskDetailComponent);



/***/ }),

/***/ "./src/app/task-search/task-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/task-search/task-search.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stc2VhcmNoL3Rhc2stc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/task-search/task-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/task-search/task-search.component.ts ***!
  \******************************************************/
/*! exports provided: TaskSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskSearchComponent", function() { return TaskSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TaskSearchComponent = class TaskSearchComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaskSearchComponent.prototype, "filteredTasks", void 0);
TaskSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/task-search/task-search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task-search.component.css */ "./src/app/task-search/task-search.component.css")).default]
    })
], TaskSearchComponent);



/***/ }),

/***/ "./src/app/task.service.ts":
/*!*********************************!*\
  !*** ./src/app/task.service.ts ***!
  \*********************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let TaskService = class TaskService {
    constructor(http) {
        this.http = http;
        this.tasksUrl = 'http://i875395.hera.fhict.nl/api/406227/task';
        this.tasks = [];
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        this.getTasks().subscribe((tasks) => { this.tasks = tasks; });
    }
    getTasks() {
        return this.http.get(this.tasksUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTasks', [])));
    }
    // GetTasksArray():Task[]{
    //   this.tasks = TASKS;
    //   return this.tasks
    // }
    /** POST: add a new hero to the server */
    addTask(task) {
        return this.http.post(this.tasksUrl, task, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addTask')));
    }
    /** GET hero by id. Will 404 if id not found */
    getTask(id) {
        const url = `${this.tasksUrl}/?id=${id}`;
        return this.http.get(url).pipe(
        //tap(_ => this.log(`fetched hero id=${id}`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getTask id=${id}`)));
    }
    getTask2(id) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == id) {
                return this.tasks[i];
            }
        }
    }
    // getTask(id:number): Observable<Task>{
    //   return of(TASKS.find(task=>task.id===id))
    // }
    // addT (task: Task): Observable<Task> {
    //   return this.http.post<Task>(this.tasksUrl, task, this.httpOptions).pipe(
    //     catchError(this.handleError<Task>('addTask'))
    //   );
    //   }
    /** PUT: update the task on the server */
    updateTask(task) {
        const url = `${this.tasksUrl}/?id=${task.id}`;
        return this.http.put(url, task, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateTask')));
    }
    SearchTaskByName(searchText) {
        let filteredTasks = [];
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].name.toLowerCase() == searchText) {
                filteredTasks.push(this.tasks[i]);
            }
        }
        return filteredTasks;
    }
    /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    }
    /** DELETE: delete the hero from the server */
    deleteTask(task) {
        const id = typeof task === 'number' ? task : task.id;
        const url = `${this.tasksUrl}/?id=${id}`;
        return this.http.delete(url, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteTask')));
    }
    /* GET heroes whose name contains search term */
    searchTasks(term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
        }
        return this.http.get(`${this.tasksUrl}/?name=${term}`).pipe(
        //tap(_ => this.log(`found heroes matching "${term}"`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('searchTasks', [])));
    }
    getEmployees() {
    }
};
TaskService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TaskService);



/***/ }),

/***/ "./src/app/task.ts":
/*!*************************!*\
  !*** ./src/app/task.ts ***!
  \*************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Task {
    constructor(id, department_id, name, employees, due_date) {
        this.id = id;
        this.name = name;
        this.due_date = due_date;
        this.department_id = department_id;
        this.employees = employees;
    }
}


/***/ }),

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n.tasks {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.tasks li {\r\n  cursor: pointer;\r\n  position: relative;\r\n  left: 0;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 2em;\r\n  border-radius: 4px;\r\n}\r\n.tasks li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.tasks li.selected {\r\n  background-color: #CFD8DC;\r\n  color: white;\r\n}\r\n.tasks li.selected:hover {\r\n  background-color: #BBD8DC;\r\n  color: white;\r\n}\r\n.tasks a {\r\n  color: #333;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n.tasks a:hover {\r\n  color:#607D8B;\r\n}\r\n.tasks .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color:#405061;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 2.4em;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete {\r\n  position: relative;\r\n  left: 230px;\r\n  top: -36px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC90YXNrcy90YXNrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4udGFza3Mge1xyXG4gIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxNWVtO1xyXG59XHJcbi50YXNrcyBsaSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG4gIHBhZGRpbmc6IC4zZW0gMDtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLnRhc2tzIGxpOmhvdmVyIHtcclxuICBjb2xvcjogIzYwN0Q4QjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG4gIGxlZnQ6IC4xZW07XHJcbn1cclxuLnRhc2tzIGxpLnNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4udGFza3MgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udGFza3MgYSB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi50YXNrcyBhOmhvdmVyIHtcclxuICBjb2xvcjojNjA3RDhCO1xyXG59XHJcblxyXG4udGFza3MgLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM0MDUwNjE7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTFweDtcclxuICB0b3A6IC00cHg7XHJcbiAgaGVpZ2h0OiAyLjRlbTtcclxuICBtYXJnaW4tcmlnaHQ6IC44ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjdXJzb3I6IGhhbmQ7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbn1cclxuXHJcbmJ1dHRvbi5kZWxldGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAyMzBweDtcclxuICB0b3A6IC0zNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/task.service.ts");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task */ "./src/app/task.ts");
/* harmony import */ var _department_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../department.service */ "./src/app/department.service.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




// import { identifierModuleUrl } from '@angular/compiler';



let TasksComponent = class TasksComponent {
    constructor(departmentService, taskservice, employeeService, http) {
        this.departmentService = departmentService;
        this.taskservice = taskservice;
        this.employeeService = employeeService;
        this.http = http;
        this.value = "";
    }
    ngOnInit() {
        this.getTasks();
        this.getDepartments();
        this.getEmployees();
    }
    onSelect(task) {
        this.selectedTask = task;
    }
    // onSelect1(task:Task):void{
    //     this.tasks.push(task);
    //   }
    // onSelect2(task:Task):void{
    //   this.tasks.pop();
    // }
    onTest(value) {
        for (let task of this.tasks) {
            if (task.name.toLowerCase() == value.toLowerCase()) {
                this.selectedTask = task;
                return;
            }
        }
        this.selectedTask = null;
    }
    getTasks() {
        this.taskservice.getTasks().subscribe(tasks => this.tasks = tasks);
    }
    // ChangeTaskName(selectedTaskNo: number) {
    //   let tempTasks = this.GetTaskByNr(this.selectedTaskNo);
    //   if (tempTasks != null) {
    //     tempTasks.name = this.changedTaskName;
    //   }}
    GetTaskByNr(taskNo) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].id == taskNo) {
                return this.tasks[i];
            } // for deleting or renaming the task
        }
    }
    SearchTask(value) {
        for (let task of this.tasks) {
            if (task.name.toLowerCase() == value.toLowerCase()) {
                this.selectedTask = task;
                return;
            }
        }
        this.selectedTask = null;
    }
    delete(task) {
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
    addT() {
        let newTask = new _task__WEBPACK_IMPORTED_MODULE_3__["Task"](this.newId, this.newDepNo, this.newName, this.newEmpId, this.dueDate);
        this.taskservice.addTask(newTask).subscribe(newT => {
            newTask = newT;
            this.tasks.push(newTask);
        });
    }
    getDepartments() {
        this.departmentService.getDepartments().subscribe(deps => this.departments = deps);
    }
    getEmployees() {
        this.employeeService.GetListOfEmployees().subscribe(emps => this.employees = emps);
    }
};
TasksComponent.ctorParameters = () => [
    { type: _department_service__WEBPACK_IMPORTED_MODULE_4__["DepartmentService"] },
    { type: _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] },
    { type: _employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tasks',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tasks.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tasks/tasks.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")).default]
    })
], TasksComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");







if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\M3800\angular-tour-of-heroes\web2-kien-trang-andreea\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.e5f7aef3180354e82acf.js.map