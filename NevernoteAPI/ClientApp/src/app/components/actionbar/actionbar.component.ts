import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../../modules/workspace/Models/Note';
import { NoteService } from '../../modules/workspace/services/note.service';

@Component({
  selector: 'app-actionbar',
  templateUrl: './actionbar.component.html',
  styleUrls: ['./actionbar.component.scss']
})
export class ActionbarComponent implements OnInit {
  @Output('addNoteEvent')
  addNoteEvent: EventEmitter<any> = new EventEmitter<Note>();

  constructor(private noteService: NoteService) {}

  ngOnInit() {}

  addNote() {
    const blankNote: Note = new Note(0, '', '', '');
    this.noteService.selectNote(blankNote);
  }
}
