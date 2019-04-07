import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {
  url = 'https://teachersguide95.azurewebsites.net';
  constructor(private http: HttpClient) { }
  getTeacher() {
    return this.http.get(`${this.url}/api/users/getall`).pipe(
      catchError(e => {
        throw new Error(e);
      })
    );
  }
}
