import { Component, ViewChild } from '@angular/core';
import { Note } from './modules/workspace/Models/Note';
import { NotelistComponent } from './modules/workspace/components/notelist/notelist.component';
import { EditorComponent } from './modules/workspace/components/editor/editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nevernote';

  constructor() {}
}
