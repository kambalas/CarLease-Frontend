import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NoteRequest, NoteResponse} from "../types";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  private client = inject(HttpClient);

  getNotesById(inputs: Partial<NoteRequest>): Observable<NoteResponse> {
    return this.client.post<NoteResponse>('https://backend-xa05.onrender.com/admin/notes/{:id}', inputs)
  }
}
