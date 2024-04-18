import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-notes-tab',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule,MatCardModule],
  templateUrl: './notes-tab.component.html',
  styleUrl: './notes-tab.component.scss'
})
export class NotesTabComponent {

}
