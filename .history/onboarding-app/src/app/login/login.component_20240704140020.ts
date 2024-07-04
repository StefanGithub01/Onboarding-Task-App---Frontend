import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: LoginRequest = { userName: '', password: '' }; // Initialize with empty values

  constructor(private http: HttpClient) {}

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
