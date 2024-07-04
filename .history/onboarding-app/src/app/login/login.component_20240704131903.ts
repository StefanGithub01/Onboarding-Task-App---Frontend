import { Component } from '@angular/core';
import { LoginService, LoginRequest } from '../login.service';
import { Router } from '@angular/router';

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
        console.log(response);
        this.router.navigate(['/main']);
      },
      error => {
        console.error(error); // Handle error
      }
    )
  }
}
