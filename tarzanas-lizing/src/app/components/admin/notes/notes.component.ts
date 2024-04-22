import { Component, OnInit, input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, AsyncPipe],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})

export class NotesComponent implements OnInit {
  dataForNotes = input();

  ngOnInit(): void {
    console.log(this.dataForNotes());
  }
}
