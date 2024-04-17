import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule

  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  username: string = "";
  password: string = "";
  show: boolean = false;

  constructor(private authService: AuthService,private http: HttpClient) {
  }

  submit() {
    const body = {
      email: this.username,
      password: this.password
    }
    this.http.post('http://localhost:8080/api/v1/auth/authenticate', body)
      .subscribe({
        next: (response: any) => {
          console.log('Login succesful', response);
          const token = response.token;
          this.authService.setToken(token);

          this.show = true;
        },
        error: (error) => {
          console.log('Login failed', error);
        }
      });
    this.clear();
  }

    clear()
    {
      this.username = "";
      this.password = "";
      this.show = true;
    }
  }

