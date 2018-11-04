import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../../Models/Note';
import { NoteService } from '../../services/note.service';
import { BehaviorSubject } from 'rxjs';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  input: string;
  textarea: string;
  canAddTag: boolean;
  selectedNote$: BehaviorSubject<Note>;

  constructor(
    private noteService: NoteService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit() {
    this.selectedNote$ = this.noteService.getSelectedNote();
  }

  saveNote() {
    this.noteService
      .createNote()
      .subscribe((messageObj: { message: string }) => {
        console.log(messageObj);
        this.snackbarService.newMessage(messageObj.message);
      });
  }

  addTag() {
    this.canAddTag = false;
  }

  toggleFavorite() {
    this.selectedNote$.getValue().isFavorite = !this.selectedNote$.getValue()
      .isFavorite;
  }
}
