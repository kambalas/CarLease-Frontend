import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CalculatorFormFields } from '../types';

@Injectable({
  providedIn: 'root'
})

export class FormDataTransferService {
  calculatorData = new BehaviorSubject<CalculatorFormFields>({
    carValue: 0,
    period: "",
    downPayment: 0,
    residualValuePercentage: "",
    isEcoFriendly: false,
    monthlyPayment: ""
  });

  setCalculatorData(formData: CalculatorFormFields) {
    this.calculatorData.next(formData);
  }
}
