import { RouterModule } from '@angular/router'; // Import RouterModule
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app.routes'; // Update the import path
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { HttpClient } from '@angular/common/http';


@NgModule({
    declarations: [
        LoginComponent,
        MainComponent
        // Add other components here
    ],
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }
