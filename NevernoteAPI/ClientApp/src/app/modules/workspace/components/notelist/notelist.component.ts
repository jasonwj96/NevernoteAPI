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
  notelist: Note[];
  
  constructor(public noteService: NoteService) { }

  ngOnInit() {
    this.noteService.loadNotelist().subscribe(value => {
      this.notelist = value as Note[];
    });
  }

}
