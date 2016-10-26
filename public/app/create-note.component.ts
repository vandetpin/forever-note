import { Component, OnInit , Input} from '@angular/core';
import { Router } from '@angular/router';
import { Location }                 from '@angular/common';
import { ActivatedRoute, Params }   from '@angular/router';

import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  moduleId: module.id,
  selector: 'create-note',
  styleUrls: ['../app/create-note.component.css'],
  templateUrl: '/app/create-note.component.html',
})
export class CreateNoteComponent implements OnInit{ 
    note: Note;
    title : string;

    constructor(
      private noteService: NoteService,
      private route: ActivatedRoute,
      private location: Location,
      private router: Router
    ) {}

    ngOnInit():void {
      this.route.params.forEach((params: Params) => {
        let category = params['cat'];
        let _content:string = 'Item';
        let _type:string = 'checklist';
        this.title = 'Todo List';
        if(category === 'note') {
          _content = 'note';  
          _type = 'note';
          this.title = 'Note';
        } 

        this.note = {
            _id: null,
            title: 'Title',
            type: _type,
            createdDate: new Date(),
            updatedDate: new Date(),
            deletedDate: null,
            completedDate: null,    
            items:[
                {
                    content: _content,
                    completed: false
                }
            ]
        };
      });  


    }

    cancel(): void{
      this.location.back();
    }

    save(): void {
      this.noteService.save(this.note);
      this.router.navigate(['/home']);
    }
}