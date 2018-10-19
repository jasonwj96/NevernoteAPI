import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './components/editor/editor.component';
import { NotelistComponent } from './components/notelist/notelist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs';
import { NoteService } from './services/note.service';
import { NoteComponent } from './components/note/note.component';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [
    EditorComponent,
    EditorComponent,
    NotelistComponent,
    NoteComponent
  ],
  exports: [EditorComponent, NotelistComponent]
})
export class WorkspaceModule {}
