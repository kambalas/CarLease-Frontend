import { Component, OnInit, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { NoteRequest } from '../../../types';
import { NotesService } from '../../../services/notes.service';

@Component({
  selector: 'app-notes-tab',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
  ],
  templateUrl: './notes-tab.component.html',
  styleUrl: './notes-tab.component.scss',
})
export class NotesTabComponent {


  private notesService = inject(NotesService);
  testNoteRequest: NoteRequest = {
    applicationId: -1,
    noteText: 'mocked notes text',
  };

  saveNote(): void {
    alert('Note saved!');
    this.notesService
      .saveNote(this.testNoteRequest)
      .subscribe((x) => console.log(x));
  }
}
