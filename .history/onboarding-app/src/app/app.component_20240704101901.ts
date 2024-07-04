import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[RouterOutlet, RouterModule],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'onboarding-app';
}
