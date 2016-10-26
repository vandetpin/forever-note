/**
 * Created by Rajiv on 10/25/2016.
 */
import { Component, Input, OnInit} from '@angular/core';

import { Note } from './note';
import { NoteService } from './note.service';

@Component({
    // moduleId: module.id,
    selector: 'note-details',
    templateUrl: '/app/note-details.component.html',
    styleUrls : ['/app/note-details.component.css'],
})
export class NoteDetailsComponent  implements OnInit{
    @Input()
    note : Note;

    constructor(
        private noteService: NoteService
    ) {}

    ngOnInit():void {
        if(this.note.items == null)
            this.note.items = [{content:'', completed: false}];
    }
    save(): void{
        this.noteService.update(this.note);
        console.dir(this.note._id);
    }
    delete(): void {
        this.noteService.delete(this.note._id);
        console.dir(this.note._id);
        location.href = '/';
    }
}
