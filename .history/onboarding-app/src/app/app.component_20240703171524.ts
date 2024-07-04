import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Example for basic routing setup
    // AppRoutingModule, // Only include if needed separately
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
