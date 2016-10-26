import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { TodoListComponent} from './todolist.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  
      {
        path: 'todolist',
        component: TodoListComponent,
      },{
        path: 'home',
        component: HomeComponent
      }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
