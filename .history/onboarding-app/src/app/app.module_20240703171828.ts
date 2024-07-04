import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module'; // Include if you have routing

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // Add other components here
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Example for basic routing setup
    // Include other modules as needed (e.g., FormsModule, HttpClientModule)
    // AppRoutingModule, // Include if you have a separate routing module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }