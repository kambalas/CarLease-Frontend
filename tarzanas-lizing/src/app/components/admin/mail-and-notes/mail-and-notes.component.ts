import { Component, input } from '@angular/core';
import { MailTabComponent } from '../mail-tab/mail-tab.component';
import { NotesComponent } from '../notes/notes.component';
import { NotesTabComponent } from '../notes-tab/notes-tab.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-mail-and-notes',
  standalone: true,
  imports: [MailTabComponent, NotesTabComponent, NotesComponent, MatTabsModule],
  templateUrl: './mail-and-notes.component.html',
  styleUrl: './mail-and-notes.component.scss'
})
export class MailAndNotesComponent {
  response$ = input();
}
