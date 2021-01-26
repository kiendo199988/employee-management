import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})

export class TaskService {
  private tasksUrl = 'http://i875395.hera.fhict.nl/api/406227/task';
  tasks: Task[]=[];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { 
    this.getTasks().subscribe((tasks)=>{this.tasks=tasks});
  }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.tasksUrl)
    .pipe(
      catchError(this.handleError<Task[]>('getTasks', []))
    )
    ;}


    // GetTasksArray():Task[]{
    //   this.tasks = TASKS;
    //   return this.tasks
    // }

    /** POST: add a new hero to the server */
    addTask (task: Task): Observable<Task> {
      return this.http.post<Task>(this.tasksUrl, task, this.httpOptions)
      .pipe(
        catchError(this.handleError<Task>('addTask'))
      );
      }

    /** GET hero by id. Will 404 if id not found */
getTask(id: number): Observable<Task> {
  const url = `${this.tasksUrl}/?id=${id}`;
  return this.http.get<Task>(url).pipe(
    //tap(_ => this.log(`fetched hero id=${id}`)),
    catchError(this.handleError<Task>(`getTask id=${id}`))
  );
}

getTask2(id: number): Task {
  for(var i =0;i<this.tasks.length;i++){
    if(this.tasks[i].id == id){
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
 updateTask (task: Task): Observable<any> {
  const url = `${this.tasksUrl}/?id=${task.id}`;
  return this.http.put(url, task, this.httpOptions).pipe(
    catchError(this.handleError<any>('updateTask'))
  );}

    
    SearchTaskByName(searchText:string): Task[]{
      let filteredTasks:Task[] = [];  
      for(var i=0;i<this.tasks.length;i++){
        if(this.tasks[i].name.toLowerCase() == searchText){
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
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    //this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

 /** DELETE: delete the hero from the server */
 deleteTask(task: Task | number):Observable<Task>{
  const id = typeof task === 'number' ? task : task.id;
  const url = `${this.tasksUrl}/?id=${id}`;
  return this.http.delete<Task>(url, this.httpOptions).pipe(
    catchError(this.handleError<Task>('deleteTask'))
  )
}

  
/* GET heroes whose name contains search term */
searchTasks(term: string): Observable<Task[]> {
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Task[]>(`${this.tasksUrl}/?name=${term}`).pipe(
    //tap(_ => this.log(`found heroes matching "${term}"`)),
    catchError(this.handleError<Task[]>('searchTasks', []))
  );
}

getEmployees(){
  
}
  

}

