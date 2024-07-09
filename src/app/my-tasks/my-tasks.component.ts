import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Task } from '../services/my-tasks.service';
@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css']
})
export class MyTasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    const userId = Number(localStorage.getItem('token')); // Get the user ID from local storage
    //console.log('userId', userId);
    this.http.get<Task[]>(`http://localhost:8080/api/tasks/users/${userId}`).subscribe(
      (data: Task[]) => {
        //this.tasks = data;
        // Sort tasks
        this.tasks = data.sort((a, b) => {
          return new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime();
        });
        console.log('Tasks of user', data);
      },
      (error) => {
        console.error('Failed to fetch tasks', error);
      }
    );
  }
}
