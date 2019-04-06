import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
const TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url = 'https://reqres.in';
  user = null;
  authenticationState = new BehaviorSubject(false);

  constructor(private http: HttpClient, private helper: JwtHelperService) {
    this.checkToken();
  }
  checkToken() {
    const token = localStorage.getItem(TOKEN_KEY);
    console.log(token);
    console.log(this.authenticationState);

    if (!!token) {
      const decoded = this.helper.decodeToken(token);
      const isExpired = this.helper.isTokenExpired(token);

      if (!isExpired) {
        this.user = decoded;
        this.authenticationState.next(true);
      } else {
        localStorage.removeItem(TOKEN_KEY);
      }
    }
    console.log(this.authenticationState.value);
  }
  register(credentials) {
    return this.http.post(`${this.url}`, credentials).pipe(
      catchError(e => {
        throw new Error(e);
      })
    );
  }

  login(credentials) {
    return this.http.post(`${this.url}/api/login`, credentials)
      .pipe(
        tap(res => {
          localStorage.setItem(TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken(res['token']);
          this.authenticationState.next(true);
        }),
        catchError(e => {
          throw new Error(e);
        })
      );
  }
}
