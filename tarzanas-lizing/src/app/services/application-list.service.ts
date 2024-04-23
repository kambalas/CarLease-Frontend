import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralAllFormsResponse, GeneralFormsResponse } from '../types';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationListService {
  private client = inject(HttpClient);

  getAllApplications(): Observable<GeneralAllFormsResponse[]> {
    return this.client.get<GeneralAllFormsResponse[]>(`${environment.API_URL}/admin/applications/page/1`)
  }

  getPersonalAndLeaseData(id: string): Observable<GeneralFormsResponse> {
    return this.client.get<GeneralFormsResponse>(`${environment.API_URL}/admin/applications/${id}`)
  }
}
