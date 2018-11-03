import { Component, OnInit, OnChanges } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Observable } from 'rxjs';
import { Note } from '../../Models/Note';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent implements OnInit {
  notelist$: Observable<Note[]>;
  constructor(public noteService: NoteService) {}

  ngOnInit() {
    this.notelist$ = this.noteService.loadNotelist();
  }
}
