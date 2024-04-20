import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-notes-tab',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, FormsModule, MatFormField, MatLabel, MatOption, MatSelect, ReactiveFormsModule],
  templateUrl: './notes-tab.component.html',
  styleUrl: './notes-tab.component.scss'
})
export class NotesTabComponent {

}
