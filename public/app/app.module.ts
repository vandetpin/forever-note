import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';


//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';
import './rxjs-extensions';


import { AppComponent }  from './app.component';

import { NoteItemComponent } from './note-item.component';
import { CreateNoteComponent } from './create-note.component';
import { TodoListComponent } from './todolist.component';

import { NoteDetailsComponent } from "./note-details.component";
import { HomeComponent } from "./home.component";

import { NoteService } from './note.service';
import { AppRoutingModule }   from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
   ],
  declarations: [
    AppComponent,
    NoteItemComponent,
    NoteDetailsComponent,
    TodoListComponent,
    NoteDetailsComponent,
    CreateNoteComponent,
    HomeComponent,
    NoteItemComponent
  ],
  providers: [NoteService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
