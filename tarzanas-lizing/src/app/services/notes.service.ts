import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NoteRequest, NoteResponse } from '../types';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private client = inject(HttpClient);

  saveNote(noteRequest: NoteRequest): Observable<any> {
    return this.client.post<NoteRequest>(
      `${environment.API_URL}/admin/notes/create`,
      noteRequest
    );
  }
}
