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
    debugger;
      this.http.post('http://localhost:8080/login', this.loginObj).subscribe((res:any) => {
        if(res.result) {
          alert("Login Success")
        } else {
          alert(res.message)
        }
      })
  }

  
  
}
