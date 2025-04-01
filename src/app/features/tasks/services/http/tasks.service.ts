import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tasks } from 'src/app/core/models/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private baseUrl = 'http://localhost:7012/api/Tasks';

  constructor(private http: HttpClient) { }

  create(tasks: any): Observable<any> {
    const url = `${this.baseUrl}/Create`;
    return this.http.post(url, tasks, this.getHttpOptions());
  }

  read(): Observable<any>{
    const url = `${this.baseUrl}/Read`;
    return this.http.get(url, this.getHttpOptions());
  }

  update(tasks: Tasks): Observable<any>{
    const url = `${this.baseUrl}/Update/${tasks.id}`;
    return this.http.post(url, tasks, this.getHttpOptions());
  }

  delete(id: number): Observable<any>{
    const url = `${this.baseUrl}/Delete/${id}`;
    return this.http.delete(url, this.getHttpOptions());
  }


  getHttpOptions(){
    return{
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }
}
