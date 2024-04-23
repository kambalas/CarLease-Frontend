import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CalculatorRequest, CalculatorResponse } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonthlyPaymentCalculatorService {
  private client = inject(HttpClient);


  getMonthlyPayment(inputs: Partial<CalculatorRequest>): Observable<CalculatorResponse> {
    return this.client.post<CalculatorResponse>('https://backend-xa05.onrender.com/car-leasing/calculator', inputs)
  }
}
