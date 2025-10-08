import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../../model/User.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private storageKey = 'usuarios';

  private urlBack = 'http://localhost:8080/api/users'

  constructor(private http: HttpClient) { }


  getUsers(): Observable<number | string> {
    return this.http.get<number | string>(this.urlBack).pipe(
      map((res) => res as number | string),
      catchError((error) => {
        return of(`Error: ${error.message}`);
      })
    )
  }

  postUser(user: User): Observable<{ id: string; name: string; email: string }> {
    return this.http.post<{ id: string; name: string; email: string }>(this.urlBack, user);
  }


  getUsersById(id: number): Observable<string> {
    return this.http.get<string>(`${this.urlBack}/${id}`).pipe(
      map((res) => res as string),
      catchError((error) => {
        return of(`Error: ${error.message}`);
      })
    );
  }

  putUser(id: number, user: { name: string, email: string }): Observable<number> {
    return this.http.put<number>(`${this.urlBack}/${id}`, user).pipe(
      map((res) => res as number),
      catchError((error) => {
        console.error(`Error: ${error.message}`);
        return of(-1);
      })
    )
  }

  deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(`${this.urlBack}/${id}`).pipe(
      map((res) => res as number),
      catchError((error) => {
        console.error(`Error: ${error.message}`);
        return of(-1);
      })
    )
  }


}
