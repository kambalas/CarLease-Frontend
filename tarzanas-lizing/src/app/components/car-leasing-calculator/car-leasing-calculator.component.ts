import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MonthlyPaymentCalculatorService } from '../../services/car-leasing-calculator.service';
import { CalculatorFormFields } from '../../types';

@Component({
  selector: 'app-car-leasing-calculator',
  standalone: true,
  imports: [MatSlideToggleModule, ReactiveFormsModule],
  templateUrl: './car-leasing-calculator.component.html',
  styleUrl: './car-leasing-calculator.component.scss'
})
export class CarLeasingCalculatorComponent {
  calculatorForm = this.makeForm();
  monthlyPayment: String = "CUSTOM VALUE";
  private service = inject(MonthlyPaymentCalculatorService);

  private makeForm() {
    return new FormGroup(
      {
        carValue: new FormControl(''),
        period: new FormControl('months'),
        downpayment: new FormControl(''),
        residual: new FormControl('0'),
        envFriendly: new FormControl(false),
      });
  }

  onSubmit(): void {
    console.log(this.calculatorForm.value);
    //this.service.postCarCalculatorData();

  }

  calculateMonthlyPayment(): void {
    if (this.calculatorForm.value.period !== "months" &&
      this.calculatorForm.value.carValue !== '' &&
      this.calculatorForm.value.downpayment != '') {
      //this.monthlyPayment = this.service.getMonthlyPayment(this.calculatorForm.value as Partial<CalculatorFormFields>);
      console.log('required fields are filled');
    }

    return;
  }
}
