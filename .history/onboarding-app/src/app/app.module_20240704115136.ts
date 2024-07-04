import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
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
        HttpClientModule,
        AppRoutingModule // Include AppRoutingModule here
        // Include other modules as needed (e.g., HttpClientModule)
    ],
    providers: [],
    bootstrap: [AppComponent] // Bootstrap AppComponent here
})
export class AppModule { }
