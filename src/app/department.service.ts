import { Injectable } from '@angular/core';
import { Department } from './department';
import { DEPARTMENTS } from './mock-departments';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departmentsUrl='http://i875395.hera.fhict.nl/api/406227/department';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Department[]>{
    return this.http.get<Department[]>(this.departmentsUrl)
    .pipe(
      catchError(this.handleError<Department[]>('getDepartments', []))
    );
  }

  getDepartment(id:number): Observable<Department>{
    const url = `${this.departmentsUrl}/?id=${id}`;
    return this.http.get<Department>(url).pipe(
    catchError(this.handleError<Department>(`getDepartment id=${id}`))
  );
  }

  /** PUT: update the department on the server */
  updateDepartment (dep: Department): Observable<any> {
  const url = `${this.departmentsUrl}/?id=${dep.id}`;
  return this.http.put(url, dep, this.httpOptions).pipe(
    catchError(this.handleError<any>('updateDepartment'))
  );
  }
  addDepartment (department: Department): Observable<Department> {
  return this.http.post<Department>(this.departmentsUrl, department, this.httpOptions).pipe(
    catchError(this.handleError<Department>('addDepartment'))
  );
  }

  deleteDepartment(department: Department | number):Observable<Department>{
    const id = typeof department === 'number' ? department : department.id;
    const url = `${this.departmentsUrl}/?id=${id}`;
    return this.http.delete<Department>(url, this.httpOptions).pipe(
      catchError(this.handleError<Department>('deleteDepartment'))
    )
  }

  

  departments :Department[];
  department:Department
  
  GetDepsArray():Department[]{
    this.departments = DEPARTMENTS;
    return this.departments
  }
  
  getDepartmentById(id:number):Department{
    for(var i=0;i<this.departments.length;i++){
      if(this.departments[i].id==id){
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
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
