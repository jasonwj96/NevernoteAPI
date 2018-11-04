import { Injectable } from '@angular/core';
import { Note } from '../Models/Note';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { environment } from '../../../../environments/environment';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private selectedNote$: BehaviorSubject<Note>;
  private apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {
    this.snackbarService.newMessage('Welcome back!');
    this.selectedNote$ = new BehaviorSubject<Note>(
      new Note(0, null, null, null)
    );
  }

  selectNote(selectedNote: Note) {
    this.selectedNote$.next(selectedNote);
    console.log(selectedNote);
    console.log(this.selectedNote$);
  }

  getSelectedNote(): BehaviorSubject<Note> {
    return this.selectedNote$;
  }

  createNote(): Observable<object> {
    const note: Note = this.getSelectedNote().getValue();
    console.log(note);

    return this.http.put<object>(`${this.apiUrl}`, note);
  }

  // Retrieves the notelist from the API
  loadNotelist(): Observable<Note[]> {
    return this.http.get<Note[]>(this.apiUrl);
  }
}
