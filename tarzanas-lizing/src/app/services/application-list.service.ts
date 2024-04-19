import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Application, GeneralFormsResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ApplicationListService {
  private client = inject(HttpClient);

  getAllApplications(): Observable<Application[]> {
    return this.client.get<Application[]>('https://ci-cd-spring.onrender.com/applications/page/1')
  }

  getPersonalAndLeaseData(id: string): Observable<GeneralFormsResponse> {
    return this.client.get<GeneralFormsResponse>('https://ci-cd-spring.onrender.com/admin/personal-information/{id}')
  }
}
