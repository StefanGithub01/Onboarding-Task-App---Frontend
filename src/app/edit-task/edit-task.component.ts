import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Task, TaskService } from '../services/my-tasks.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { UserDTO } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent implements OnInit {
  task: Partial<Task> = {}; // Initialize with Partial<Task> to allow optional properties
  editingEnabled: boolean = false;
  statuses: string[] = [];
  users: UserDTO[] = [];
  private apiUrlStatues = "http://localhost:8080/api/tasks/statuses";
  private apiUrlGetAllUsers = "http://localhost:8080/api/users";

  constructor(private router: Router, private http: HttpClient, private taskService: TaskService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      //this.fetchTask(Number(taskId));
      this.fetchTask(Number(taskId));
    }
    this.getStatuses();
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.http.get<UserDTO[]>(this.apiUrlGetAllUsers).subscribe(
      (data: UserDTO[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Failed to fetch users', error);
      }
    );
  }
  fetchTask(id: number): void {
    this.taskService.getTaskById(id).subscribe(
      (task: Task) => {
        this.task = task;
      },
      (error) => {
        console.error('Failed to fetch task', error);
      }
    );
  }


  getStatuses(): void {
    this.http.get<string[]>(this.apiUrlStatues).subscribe(
      (data) => {
        this.statuses = data;
      },
      (error) => {
        console.error('Failed to fetch statuses', error);
      }
    )
  }

  toggleEdit(): void {
    this.editingEnabled = !this.editingEnabled;
  }
  editTask(): void {
    if(this.task.id) {
      this.taskService.editTask(this.task as Task).subscribe(
        (updatedTask) => {
          console.log('Task updated successfully', updatedTask);
          alert('Task updated successfully!');
          this.toggleEdit();
        },
        (error) => {
          console.error('Failed to update task', error);
        }
      );
    }
  }

  newTask(): void {
    this.router.navigate(['main/new-task']);
  }

  
}