import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { SearchComponent } from './search/search.component';
import { authGuard } from './guards/auth-guard.guard';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { NewTaskComponent } from './new-task/new-task.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'main', component: MainComponent, canActivate: [authGuard], children: [
        { path: 'my-tasks', component: MyTasksComponent },
        { path: 'search', component: SearchComponent },
        { path: 'edit-task/:id', component: EditTaskComponent },
        { path: 'new-task', component: NewTaskComponent}
    ]}
      
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }