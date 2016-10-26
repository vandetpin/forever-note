import { Component, Input, OnInit } from '@angular/core';

import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  moduleId: module.id,
  selector: 'note-item',
  templateUrl: '/app/note-item.component.html',
  styleUrls : ['../app/note-item.component.css']
})
export class NoteItemComponent implements OnInit{
    @Input()
    note : Note;

    @Input()
    selectedNote : boolean;

    constructor(
      private noteService: NoteService
    ) {}

    ngOnInit():void {
    
    }
}
