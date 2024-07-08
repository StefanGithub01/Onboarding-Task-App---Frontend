import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id: number;
  dueDate: Date;
  subject: string;
  status: string;
  assigned: {
    username: string;
  }
}

export interface SearchTaskDto {
  selectedUserId: string; 
  subject: string; 
  dueDateAfter: string; 
  selectedStatus: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/api/tasks'; 

  constructor(private http: HttpClient) {}

  getTasks(userId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/${userId}`);
  }
}
