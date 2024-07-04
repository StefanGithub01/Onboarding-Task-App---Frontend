import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports:[RouterOutlet],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'onboarding-app';
}
