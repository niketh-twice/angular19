import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth/auth.service.ts.service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-login-page',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  loginForm: FormGroup;
  
constructor(private fb: FormBuilder,private auth: AuthService, private router: Router){
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });}

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      const hashedPassword = CryptoJS.MD5(password).toString();
      this.auth.login({ email, password: hashedPassword}).subscribe({
        next: (LoginResponse:any) =>   {
          const accessToken = LoginResponse.data.access_token;
          console.log('LoginResponse:', accessToken);
          this.auth.loginToken(accessToken);
        
          
        },
        error: (_err: any) => alert('Login failed'),
      });
    }
  }

  
}
