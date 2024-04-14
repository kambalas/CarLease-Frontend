import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CalculatorFormFields, CalculatorResponse } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonthlyPaymentCalculatorService {
  private client = inject(HttpClient);

  getMonthlyPayment(inputs: Partial<CalculatorFormFields>): Observable<CalculatorResponse> {
    return this.client.post<CalculatorResponse>('https://backend-xa05.onrender.com/car-leasing/calculator', inputs)
  }

  postCarCalculatorData(formData: CalculatorFormFields) {
    console.log(formData);
  }
}
