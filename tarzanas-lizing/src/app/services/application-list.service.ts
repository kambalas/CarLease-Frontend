import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Application, GeneralFormsResponse, Status, sortAndFilterRequest } from '../types';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationListService {
  private client = inject(HttpClient);

  getApplicationsByStatusAndQuery(inputs: sortAndFilterRequest): Observable<Application[]> {
    return this.client.post<Application[]>(`${environment.API_URL}/admin/applications`, inputs)
  }

  getPersonalAndLeaseData(id: string): Observable<GeneralFormsResponse> {
    return this.client.get<GeneralFormsResponse>(`${environment.API_URL}/admin/applications/${id}`)
  }
}
