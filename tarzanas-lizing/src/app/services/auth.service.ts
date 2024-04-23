import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from "rxjs";
import {LoginFormFields, LoginFormRequest} from "../types";
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private client = inject(HttpClient);


  constructor() {
  }

  setToken(token: string): void {
    this.token = token;
    sessionStorage.setItem('jwt', token);
  }

  getToken(): string | null {
    return sessionStorage.getItem('jwt');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return !!token;
  }

  postLogin(loginFields: FormGroup): Observable<any> {
    return this.client.post<LoginFormRequest>('https://ci-cd-spring.onrender.com/user/api/v1/auth/authenticate',
      {
        "username": loginFields.get('username')?.value,
        "password": loginFields.get('password')?.value
      });
  }
}
