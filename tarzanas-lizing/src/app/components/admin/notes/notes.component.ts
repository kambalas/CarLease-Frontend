import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { Observable, of } from "rxjs";
import { AsyncPipe } from "@angular/common";
import { NoteResponse } from "../../../types";

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, AsyncPipe],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})

export class NotesComponent {

  noteText$: Observable<NoteResponse> | undefined;

  responseData$ = of({
    noteText: "Ka meta, ta pataiko, patikimas",
  })
}
