import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

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

    constructor(
      private noteService: NoteService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    ngOnInit():void {
    
    }

    viewDetail(): void {
       //TODO
    }
}
