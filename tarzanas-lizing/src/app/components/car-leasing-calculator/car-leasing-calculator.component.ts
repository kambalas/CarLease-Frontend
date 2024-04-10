import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-car-leasing-calculator',
  standalone: true,
  imports: [MatSlideToggleModule, ReactiveFormsModule],
  templateUrl: './car-leasing-calculator.component.html',
  styleUrl: './car-leasing-calculator.component.scss'
})
export class CarLeasingCalculatorComponent {
  calculatorForm = this.makeForm();

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

  onSubmit() {
    console.log(this.calculatorForm.value);
  }

}
