import { Component, OnInit, OnChanges } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent implements OnInit {
  constructor(public noteService: NoteService) { }

  ngOnInit() { }
}
