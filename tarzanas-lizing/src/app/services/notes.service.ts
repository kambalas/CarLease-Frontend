import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { NoteRequest, NoteResponse } from "../types";
import { Observable } from "rxjs";
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private client = inject(HttpClient);

  // getNotesById(inputs: Partial<NoteRequest>): Observable<NoteResponse> {
  // return this.client.get<NoteResponse>(`${environment.API_URL}/admin/notes/${id}`, inputs)
  // }
}
