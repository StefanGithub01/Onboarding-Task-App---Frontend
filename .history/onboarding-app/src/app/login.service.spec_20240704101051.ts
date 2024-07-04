import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { Injectable } from '@angular/core';

export interface LoginRequest {
  userName: string;
  password: string;
}

@Injectable( {
  providedIn: 'root'
})
