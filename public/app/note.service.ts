import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Note } from './note'; 

@Injectable()
export class NoteService {
  private notesUrl = '/notes';  // URL to web api
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

  search(keyword: string, offset:number, limit:number, category:string): Observable<Note[]> {
    const url = `${this.notesUrl}/search?keyword=${keyword}&offset=${offset}&limit=${limit}&cat=${category}`;
    return this.http
               .get(url)
               .map((r: Response) => r.json().items as Note[]);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  update(note:Note): Promise<Note> {
    const url = `${this.notesUrl}/${note._id}`;
    return this.http
      .put(url, JSON.stringify(note), {headers: this.headers})
      .toPromise()
      .then(() => {
        console.log("Update on: " + note);
        return note;
      })
      .catch(this.handleError);
  }

  save(note:Note): Promise<Note> {
    return this.http
      .post(this.notesUrl, JSON.stringify(note), {headers: this.headers})
      .toPromise()
      .then(() => {
        console.log("Save on: " + note);
        return note;
      })
      .catch(this.handleError);
  }

  delete(id:string): Promise<void> {
    const url = `${this.notesUrl}/${id}`;
    console.dir(url);
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
