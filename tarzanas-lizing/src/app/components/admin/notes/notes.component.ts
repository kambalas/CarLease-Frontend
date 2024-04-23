import { Component, OnInit, input, inject, SimpleChanges } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { AsyncPipe } from "@angular/common";
import { NoteResponse } from "../../../types";
import {NotesService} from "../../../services/notes.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, AsyncPipe],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})

export class NotesComponent implements OnInit {
  applicationId = input<string>();
  responseData$: Observable<NoteResponse[]> = of();
  private notesService = inject(NotesService);

  ngOnChanges(changes: SimpleChanges): void {
    this.responseData$ = this.notesService.getNotesById(changes['applicationId'].currentValue);
  }

  ngOnInit(): void {
    console.log(this.applicationId());
  }
}
