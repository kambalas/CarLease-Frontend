import { Component } from '@angular/core';
import { MailComponent } from '../mail/mail.component';
import { NotesComponent } from '../notes/notes.component';

@Component({
  selector: 'app-mail-and-notes',
  standalone: true,
  imports: [MailComponent, NotesComponent],
  templateUrl: './mail-and-notes.component.html',
  styleUrl: './mail-and-notes.component.scss'
})
export class MailAndNotesComponent {

}
