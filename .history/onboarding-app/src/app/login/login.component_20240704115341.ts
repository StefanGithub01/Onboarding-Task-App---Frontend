import { Component } from '@angular/core';
import { LoginService, LoginRequest } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName: string = "";
  password: string = "";

  constructor(private loginService: LoginService) {}

  onSubmit(): void {
    const loginRequest: LoginRequest = {
      userName: this.userName,
      password: this.password
    };

    this.loginService.login(loginRequest).subscribe(
      response => {
        console.log(response);
        // Redirect to main page on successful login
      },
      error => {
        console.error(error); // Handle error
      }
    )
  }
}
