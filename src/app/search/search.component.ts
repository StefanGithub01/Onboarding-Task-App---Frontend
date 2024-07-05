import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Task } from '../my-tasks/my-tasks.service';
import { Observable } from 'rxjs';
import { UserDTO } from '../user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
tasks: Task[] = [];
filteredTasks: Task[] = [];
users: UserDTO[] = [];
statuses: string[] = [];

private apiUrl = "http://localhost:8080/api/tasks";
private apiUrlGetAllUsers = "http://localhost:8080/api/users";
private apiUrlStatues = "http://localhost:8080/api/tasks/statuses";

constructor(private http: HttpClient) {}

ngOnInit(): void {
  this.getAllTasks();
  this.getAllUsers();
  this.getStatuses();

}

getAllTasks(): void {
   this.http.get<Task[]>(this.apiUrl).subscribe(
    (data: Task[]) => {
      this.tasks = data;
      this.filteredTasks = data;
    },
    (error) => {
      console.error('Failed to fetch tasks', error);
    }
  );
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

  searchTasks(): void {
    // implement backend call
  }

}
