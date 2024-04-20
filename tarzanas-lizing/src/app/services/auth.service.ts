import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

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
}
