import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Note } from './note'; 

@Injectable()
export class NoteService {
  private notesUrl = 'app/notes';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getNotes(): Promise<Note[]> {
    const url = `${this.notesUrl}`;

    return this.http.get(url)
               .toPromise()
               .then(response => {
                 console.log(response);
                  return response.json().data as Note[];
               })
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
