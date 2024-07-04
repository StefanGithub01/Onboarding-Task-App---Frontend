import { Component } from '@angular/core';
import { LoginService, LoginRequest } from '../login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: LoginRequest;

  constructor() {
    this.loginObj = new LoginRequest;
  }

  onSubmit(): void {
    const loginRequest: LoginRequest = {
      userName: this.userName,
      password: this.password
    };

    this.loginService.login(loginRequest).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/main']);
      },
      error => {
        console.error(error); // Handle error
      }
    )
  }
}
