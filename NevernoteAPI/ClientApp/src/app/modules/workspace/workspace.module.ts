import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './components/editor/editor.component';
import { NotelistComponent } from './components/notelist/notelist.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs';
import { NoteComponent } from './components/note/note.component';
import { ReversePipe } from './pipes/reverse/reverse.pipe';
import { SnackbarService } from './services/snackbar.service';
import { NoteService } from './services/note.service';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [
    EditorComponent,
    EditorComponent,
    NotelistComponent,
    NoteComponent,
    ReversePipe
  ],
  providers: [SnackbarService, NoteService],
  exports: [EditorComponent, NotelistComponent]
})
export class WorkspaceModule {}
