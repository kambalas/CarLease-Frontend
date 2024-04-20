import { Component, inject, input } from '@angular/core';
import { MailTabComponent } from '../mail-tab/mail-tab.component';
import { NotesComponent } from '../notes/notes.component';
import { NotesTabComponent } from '../notes-tab/notes-tab.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ApplicationListService } from '../../../services/application-list.service';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-mail-and-notes',
  standalone: true,
  imports: [MailTabComponent, NotesTabComponent, NotesComponent, MatTabsModule, MatCardContent, MatCard, MatDivider],
  templateUrl: './mail-and-notes.component.html',
  styleUrl: './mail-and-notes.component.scss'
})
export class MailAndNotesComponent {
  selectedId = input();
  private service = inject(ApplicationListService);
}
