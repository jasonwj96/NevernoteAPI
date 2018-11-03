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

  private noteList$: Observable<Note[]>;
  private apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient,
    private snackbarService: SnackbarService
  ) {
    this.noteList$ = this.loadNotelist();
    this.snackbarService.newMessage('Welcome back!');
    this.selectedNote$ = new BehaviorSubject<Note>(
      new Note(0, null, null, null)
    );
  }

  selectNote(selectedNote: Note) {
    this.selectedNote$.next(selectedNote);
  }

  getSelectedNote(): BehaviorSubject<Note> {
    return this.selectedNote$;
  }

  createNote() {
    this.http
      .post(this.apiUrl, this.selectedNote$)
      .subscribe((messageObj: { message: string }) => {
        this.snackbarService.newMessage(messageObj.message);
      });
  }

  // Returns the notelist$ field from this service
  getNotelist(): Observable<Note[]> {
    return this.noteList$;
  }

  // Retrieves the notelist from the API
  loadNotelist(): Observable<Note[]> {
    // return this.http.get<Note[]>(this.apiUrl) as BehaviorSubject<Note[]>;
    return this.http.get<Note[]>(this.apiUrl);
  }
}
