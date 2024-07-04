import { Component } from '@angular/core';
import { LoginService, LoginRequest } from '../login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: LoginRequest;

  constructor(private http: HttpClient) {
    this.loginObj = new LoginRequest;
  }

  onLogin() {
    console.log(this.loginObj);
    this.http.post<any>('http://localhost:8080/api/users/login', this.loginObj).subscribe(
      (res) => {
        if (res.result) {
          alert('Login Success');
          // Redirect to another page or perform additional actions upon successful login
        } else {
          alert(res.message); // Show error message from server
        }
      },
      (error) => {
        console.error('Login error', error);
        // Handle HTTP error
        alert('Login failed'); // Display a generic error message
      }
    );
  }

  
  
}
