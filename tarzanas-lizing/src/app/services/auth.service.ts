import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, Observable, switchMap} from "rxjs";
import {LoginFormFields, LoginFormRequest} from "../types";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private client = inject(HttpClient);
  private loginFields = new BehaviorSubject<LoginFormFields>(
    {
      username: '',
      password: ''
    }
  );

  constructor() {}

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

  setLoginData(formData: LoginFormFields): void {
    this.loginFields.next(formData);
  }

  postLogin(): Observable<any>{
    return this.loginFields
      .pipe(switchMap(req => this.client.post<LoginFormRequest>('https://ci-cd-spring.onrender.com/user/api/v1/auth/authenticate', req)));
  }
}
