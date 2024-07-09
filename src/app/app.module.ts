import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routes';
import { EditTaskComponent } from './edit-task/edit-task.component';


@NgModule({
    declarations: [

        
    ],
    imports: [
        RouterModule,
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }
