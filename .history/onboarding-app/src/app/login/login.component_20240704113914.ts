import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService, LoginRequest } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string = "";
  password: string = "";

  constructor(private loginService: LoginService, private router: Router) {}

onSubmit(): void {
  const loginRequest: LoginRequest = {
    userName: this.userName,
    password: this.password
  };

  this.loginService.login(loginRequest).subscribe(
    response => {
      console.log(response)
      this.router.navigate(['/main']);
      // handle success
    },
    error => {
      console.error(error) // handle error
    }
  )
}

  
}
