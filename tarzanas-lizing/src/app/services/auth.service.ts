import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

  constructor() {}

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem('jwt', token);  // Store token in localStorage
  }

  getToken(): string | null {
    return localStorage.getItem('jwt');
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    // Here you might add more complex checks like token expiration
    return !!token;
  }
}
