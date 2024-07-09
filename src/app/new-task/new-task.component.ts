import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/my-tasks.service';
import { UserDTO } from '../user.service';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Task, TaskDTO } from '../services/my-tasks.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  task: Partial<TaskDTO> = {}; 
  statuses: string[] = [];
  users: UserDTO[] = [];
  private apiUrlStatues = "http://localhost:8080/api/tasks/statuses";
  private apiUrlGetAllUsers = "http://localhost:8080/api/users";

  constructor(private taskService: TaskService, 
              private http: HttpClient, 
              private router: Router) {} 

  ngOnInit(): void {
    this.getStatuses();
    this.getAllUsers();
  }

  getStatuses(): void {
    this.http.get<string[]>(this.apiUrlStatues).subscribe(
      (data) => { this.statuses = data; },
      (error) => { console.error('Failed to fetch statuses', error); }
    );
  }

  getAllUsers(): void {
    this.http.get<UserDTO[]>(this.apiUrlGetAllUsers).subscribe(
      (data: UserDTO[]) => { this.users = data; },
      (error) => { console.error('Failed to fetch users', error); }
    );
  }

  createTask(): void {
    this.taskService.createTask(this.task as TaskDTO).subscribe(
      (newTask) => {
        console.log('Task created successfully', newTask);
        alert('Task created successfully!');
        this.router.navigate(['/main/edit-task', newTask.id]); 
      },
      (error) => {
        console.error('Failed to create task', error);
      }
    );
  }
}
