import { Component, OnInit , Input} from '@angular/core';

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
      private noteService: NoteService
    ) {}

    ngOnInit():void {
    }

    addItem(): void {
      this.note.items.push({content: 'Item', completed: false});
    }

    removeItem(index: number) {
      this.note.items.splice(index, 1);
    }
}