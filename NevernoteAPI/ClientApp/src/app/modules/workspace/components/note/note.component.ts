import { Component, OnInit, OnChanges, Input, Output } from '@angular/core';
import { Note } from '../../Models/Note';
import { EventEmitter } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-task',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  constructor(private noteService: NoteService) {}

  @Input('note') note: Note;

  ngOnInit() {}

  getSummary(): string {
    const maxLenght = 110;
    if (this.note.description.length > maxLenght) {
      return `${this.note.description.substr(0, maxLenght)}...`;
    } else {
      return this.note.description;
    }
  }

  selectNote() {
    this.noteService.selectNote(this.note);
  }
}
