import { Component, Inject } from '@angular/core';
import { MatFormField, MatLabel } from "@angular/material/form-field";
import {FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule} from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIcon,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  loginForm: FormGroup;
  passwordHidden: boolean = true;


  constructor(private authService: AuthService,private http: HttpClient, private router:Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  submit() {
<<<<<<< HEAD
    const body = {
      username: this.username,
      password: this.password
    }
    this.http.post('https://ci-cd-spring.onrender.com/user/api/v1/auth/authenticate', body)
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
=======
    this.authService.postLogin(this.loginForm).subscribe({
      next: (data) => {
        console.log("Success!")
        this.authService.setToken(data.token);
        this.router.navigate(['/admin']);
        console.log(data)
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
>>>>>>> 6998b6fa06259afea800b644474864935950ee07
    this.clear();
    }

  clear() {
    this.loginForm.reset();
  }
}

