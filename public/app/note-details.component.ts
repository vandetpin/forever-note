/**
 * Created by Rajiv on 10/25/2016.
 */
import { Component, Input, OnInit, EventEmitter} from '@angular/core';
// import { ActivatedRoute, Params }   from '@angular/router';
// import { Location }                 from '@angular/common';

import { Note } from './note';
import { NoteService } from './note.service';

@Component({
    // moduleId: module.id,
    selector: 'note-details',
    templateUrl: '/app/note-details.component.html',
    styleUrls : ['/app/note-details.component.css']
})
export class NoteDetailsComponent  implements OnInit{
    @Input()
    note : Note;
    //deleteNote = new EventEmitter<Note>();

    constructor(
        private noteService: NoteService
        // private route: ActivatedRoute,
        // private location: Location
    ) {}

    ngOnInit():void {
        // this.note = new Note();
        this.note.items = [{content:'', completed: false}];
    }

    viewDetail(id): void {
       // this.noteService.getNoteDetails(id).then(note=>{
       //     this.note = note;
       // });
    }
    save(): void{
        console.dir(this.note._id);
        this.noteService.update(this.note);
    }
    delete(): void {
        console.dir(this.note._id);
        this.noteService.delete(this.note._id);
      //this.noteService.delete(this.note);
    }
}
