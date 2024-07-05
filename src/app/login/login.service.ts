import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class LoginRequest {
  userName: string;
  password: string;

  constructor() {
    this.userName = "";
    this.password = "";
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/login'; 

  constructor(private http: HttpClient) {}

  login(loginRequest: LoginRequest) : Observable<any> {
    return this.http.post(this.apiUrl, loginRequest, {responseType: 'text'});
  }
}