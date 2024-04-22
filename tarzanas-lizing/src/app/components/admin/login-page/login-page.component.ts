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
    this.authService.setLoginData(this.loginForm.value);
    this.authService.postLogin().subscribe({
      next: (data) => {
        console.log("Success!")
        this.authService.setToken(data.token);
        console.log(data)
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
    this.clear();
    }

  clear() {
    this.loginForm.reset();
  }
}

