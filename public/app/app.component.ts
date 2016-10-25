import { Component, OnInit } from '@angular/core';

import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'my-app',
  styleUrls: ['../app/app.component.css'],
  templateUrl : '/app/app.component.html'
})
export class AppComponent implements OnInit{
  notes : Note[];
  selectedNote : Note;

  constructor(private noteService : NoteService){}

  ngOnInit(): void {
    // load data to list
    this.loadNotes();
  }

  loadNotes(): void {
      this.noteService.getNotes().then(notes => {
        this.notes = notes;
        this.selectedNote = null;
      });
  }
}
