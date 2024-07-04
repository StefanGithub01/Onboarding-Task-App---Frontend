import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app.routes'; // Update the import path
import { RouterModule } from '@angular/router'; // Import RouterModule

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
        FormsModule, // Include FormsModule here
        AppRoutingModule,
        // Include other modules as needed (e.g., HttpClientModule)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
