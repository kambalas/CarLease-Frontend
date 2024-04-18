import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-notes-tab',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './notes-tab.component.html',
  styleUrl: './notes-tab.component.scss'
})
export class NotesTabComponent {

}
