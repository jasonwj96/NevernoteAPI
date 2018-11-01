import { Injectable } from '@angular/core';
import { Note } from '../Models/Note';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private selectedNote$: BehaviorSubject<Note> = new BehaviorSubject<Note>(
    new Note(0, '', '', '')
  );

  private noteList$: BehaviorSubject<Note[]>;
  // apiPort = 5001;
  // apiUrl = `https://localhost:${this.apiPort}/api/notes`;
  private apiUrl = environment.API_URL;
  snackBarDuration = 4000; // miliseconds
  snackBarAction = `ok`; // the text on the confirmation message in the snackbar

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.noteList$ = this.fetchNotelist();
    this.newMessage('Welcome back!');
  }

  newMessage(message: string) {
    this.snackBar.dismiss();
    this.snackBar.open(message, this.snackBarAction, {
      duration: this.snackBarDuration,
      panelClass: ['mat-simple-snackbar', 'mat-simple-snackbar-action']
    });
  }

  selectNote(selectedNote: Note) {
    this.selectedNote$.next(selectedNote);
  }

  getSelectedNote(): BehaviorSubject<Note> {
    return this.selectedNote$;
  }

  createNote() {
    this.http
      .post(`${this.apiUrl}/add`, this.selectedNote$.getValue())
      .subscribe((messageObj: { message: string }) => {
        this.newMessage(messageObj.message);
      });
  }

  getNotelist(): BehaviorSubject<Note[]> {
    return this.noteList$;
  }

  fetchNotelist(): BehaviorSubject<Note[]> {
    return this.http.get<Note[]>(this.apiUrl) as BehaviorSubject<Note[]>;
  }
}
