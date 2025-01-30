import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'http://localhost:7012/api/User';

  constructor(private http: HttpClient) {}

  createUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/Create`;
    return this.http.post(url, user, this.getHttpOptions());
  }

  readUsers(): Observable<any> {
    const url = `${this.baseUrl}/Read`;
    return this.http.get(url, this.getHttpOptions());
  }

  updateUsers(dni: string, user: any): Observable<any> {
    const url = `${this.baseUrl}/Update`;
    return this.http.post(url, user, this.getHttpOptions());
  }

  deleteUser(dni: string): Observable<any> {
    const url = `${this.baseUrl}/Delete/${dni}`;
    return this.http.delete(url, this.getHttpOptions());
  }

  private getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
}
