import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CalculatorFormFields } from '../types';

@Injectable({
  providedIn: 'root'
})
export class MonthlyPaymentCalculatorService {
  private client = inject(HttpClient);

  getMonthlyPayment(inputs: Partial<CalculatorFormFields>): string {
    //this.client.get('backend url');
    console.log(inputs);
    return 5n.toString();
    // observable turi grazint cia ir su async loadint virsuj
  }

  postCarCalculatorData(formData: CalculatorFormFields) {
    console.log(formData);
  }
}
