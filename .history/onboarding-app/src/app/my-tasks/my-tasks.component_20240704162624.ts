import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Task {
  id: number;
  dueDate: Date;
  subject: string;
  status: string;
}
@Component({
  selector: 'app-my-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-tasks.component.html',
  styleUrl: './my-tasks.component.css'
})
export class MyTasksComponent implements OnInit{
  tasks: Task[] = []; 
  constructor() {}
  ngOnInit(): void {
    // DUMMY DATA REPLACE WITH BACKEND DATA!!
    this.tasks = [
      { id: 1, dueDate: new Date(), subject: 'Task 1', status: 'New' },
      { id: 2, dueDate: new Date(), subject: 'Task 2', status: 'In Progress' },
      { id: 3, dueDate: new Date(), subject: 'Task 3', status: 'Done' }
    ];

  }

}
