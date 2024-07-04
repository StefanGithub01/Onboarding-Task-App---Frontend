import { RouterModule } from '@angular/router'; // Import RouterModule
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app.routes'; // Update the import path
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        MainComponent
        // Add other components here
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        RouterModule // Include RouterModule here
        // Include other modules as needed
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
