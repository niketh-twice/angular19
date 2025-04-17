import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Authsevice } from '../../auth.service';
import { ILogin } from '../../../Logininterface';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = ''
constructor(private authService: Authsevice){}
onLogin(){
  const credentials = {
    username: this.username,
    password: this.password
  }
 this.authService.login(credentials).subscribe({
  next: (res : ILogin) => {
    console.log('resss',res)
    if(res.accessToken){
      alert('user identified')
    }
  },
  error: (err) => {
    console.log('error',err.message)
  }
 })
}
}
