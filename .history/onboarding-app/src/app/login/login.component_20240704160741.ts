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

  constructor(private http: HttpClient, private router: Router) {
    this.loginObj = new LoginRequest;
  }

  onLogin() {
    console.log(this.loginObj);
    this.http.post('http://localhost:8080/api/users/login', this.loginObj, { 
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text'  // Specify that the response should be treated as plain text
    }).subscribe(
      (res: string) => {
        console.log("Login SUCCESS: ", res);
        alert(res);
        localStorage.setItem('token', '1');  // Assume the backend sends a token

        this.router.navigateByUrl("/main");
      },
      (error) => {
        console.error('Login error', error);
        // Check if the error has a text message and display it
        if (error.error && typeof error.error === 'string') {
          alert(`Login error: ${error.error}`);
        } else {
          alert('An unexpected error occurred. Please try again later.');
        }
      }
    );
  }
  
  
  
}
