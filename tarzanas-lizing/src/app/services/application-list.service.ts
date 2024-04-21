import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralAllFormsResponse, GeneralFormsResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ApplicationListService {
  private client = inject(HttpClient);

  getAllApplications(): Observable<GeneralAllFormsResponse[]> {
    return this.client.get<GeneralAllFormsResponse[]>('https://ci-cd-spring.onrender.com/admin/applications/page/1')
  }

  getPersonalAndLeaseData(id: string): Observable<GeneralFormsResponse> {
    return this.client.get<GeneralFormsResponse>(`https://ci-cd-spring.onrender.com/admin/applications/${id}`)
  }
}
