import { Component } from '@angular/core';
import { ApplicationListComponent } from '../application-list/application-list.component';
import { MailAndNotesComponent } from '../mail-and-notes/mail-and-notes.component';
import { SingleApplicationViewComponent } from '../single-application-view/single-application-view.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [ApplicationListComponent, MailAndNotesComponent, SingleApplicationViewComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {
  selectedId!: string;

  setSelectedId(id: string) {
    this.selectedId = id;
  }
}
