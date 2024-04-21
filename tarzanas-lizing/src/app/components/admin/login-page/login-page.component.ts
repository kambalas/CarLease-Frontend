import { Component, Inject } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    FormsModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  username: string = "";
  password: string = "";

  constructor(private authService: AuthService,private http: HttpClient, private router:Router) {
  }
  submit() {
    const body = {
      username: this.username,
      password: this.password
    }
    this.http.post('https://ci-cd-spring.onrender.com/api/v1/auth/authenticate', body)
      .subscribe({
        next: (response: any) => {
          console.log('Login succesful', response);
          const token = response.token;
          this.authService.setToken(token);
          this.router.navigate(['/admin']);
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
    }
  }

