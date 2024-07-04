import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginService, LoginRequest } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule] // Import necessary modules
})

export class LoginComponent {
  userName: string = '';
  password: string = '';

  constructor(private loginService: LoginService) {}

  onSubmit() {
    const loginRequest: LoginRequest = {
      userName: this.userName,
      password: this.password
    };

    this.loginService.login(loginRequest).subscribe(
      response => {
        console.log(response); // Handle successful login
        // You can redirect the user to another page or show a success message
      },
      error => {
        console.error('Login failed', error); // Handle login error
        // You can show an error message to the user
      }
    );
  }
}
