import { Component, OnInit } from '@angular/core';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { Note } from './note';
import { NoteService } from './note.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  styleUrls: ['../app/home.component.css'],
  templateUrl : '/app/home.component.html'
})
export class HomeComponent implements OnInit{
  selectedNote : Note;

  notes: Observable<Note[]>;
  private keyword = new Subject<string>();
  private offset: number =0;
  private limit: number = 100;
  private category: string='';

  constructor(private noteService : NoteService){}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.keyword.next(term);
  }
  ngOnInit(): void {
    
    //config search term
    this.notes = this.keyword
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.noteService.search(term, this.offset, this.limit, this.category)
        // or the observable of empty heroes if no search term
        : Observable.of<Note[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Note[]>([]);
      });

      //TODO load data

  }
}
