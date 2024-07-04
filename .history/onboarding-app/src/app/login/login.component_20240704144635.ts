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
    this.http.post('http://localhost:8080/api/users/login', this.loginObj, { headers: { 'Content-Type': 'application/json' }}).subscribe(
      (res: any) => {
        if (res.result) {
          console.log("Login SUCCESS");
        } else {
          console.log("Login FAILED: ", res.message);
          alert(res.message);
        }
      },
      (error) => {
        console.error('Login error', error);
        if (error.status === 401) {
          alert('Invalid credentials. Please try again.');
        } else {
          alert('An unexpected error occurred. Please try again later.');
        }
      }
    );
  }
  
  }

  
  
}
