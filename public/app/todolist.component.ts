import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { Location }                 from '@angular/common';
import { ActivatedRoute, Params }   from '@angular/router';

import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  styleUrls: ['../app/todolist.component.css'],
  templateUrl: '/app/todolist.component.html',
})
export class TodoListComponent implements OnInit{ 
    @Input()
    note: Note;

    constructor(
      private noteService: NoteService,
      private route: ActivatedRoute,
      private location: Location
    ) {}
    ngOnInit():void {
    }
}