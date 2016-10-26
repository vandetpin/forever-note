
import { Component, Input, OnInit} from '@angular/core';
import { Note } from './note';

@Component({
    moduleId: module.id,
    selector: 'note',
    templateUrl: '/app/note.component.html',
    styleUrls : ['../app/note.component.css'],

})
export class NoteComponent  implements OnInit{
    @Input()
    note : Note;
    constructor(
    ) {}
    ngOnInit():void {
        if(this.note.items == null)
            this.note.items = [{content:'', completed: false}];
    }
}
