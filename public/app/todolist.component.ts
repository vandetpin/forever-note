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
    note: Note;

    constructor(
      private noteService: NoteService,
      private route: ActivatedRoute,
      private location: Location,
      private router: Router
    ) {}

    ngOnInit():void {
      this.note = {
          _id: null,
          title: 'Title',
          type: 'checklist',
          createdDate: new Date(),
          updatedDate: new Date(),
          deletedDate: new Date(),
          completedDate: new Date(),    
          items:[
              {
                  content: 'Item',
                  completed: false
              }
          ]
      };

    }

    addItem(): void {
      this.note.items.push({content: 'Item', completed: false});
    }

    removeItem(index: number) {
      this.note.items.splice(index, 1);
    }

    cancel(): void{
      this.location.back();
    }

    save(): void {
      this.noteService.save(this.note);
      this.router.navigate(['/home']);
    }
}