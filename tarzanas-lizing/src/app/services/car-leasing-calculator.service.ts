import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CalculatorFormFields } from '../types';

@Injectable({
  providedIn: 'root'
})
export class MonthlyPaymentCalculatorService {
  private client = inject(HttpClient);

  getMonthlyPayment(inputs: Partial<CalculatorFormFields>): string {
    this.client.get('backend url');
    return 5n.toString();
  }
}
