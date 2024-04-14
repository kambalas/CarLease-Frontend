import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MonthlyPaymentCalculatorService } from '../../../services/car-leasing-calculator.service';
import { CalculatorFormFields, CalculatorResponse } from '../../../types';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-car-leasing-calculator',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    AsyncPipe],
  templateUrl: './car-leasing-calculator.component.html',
  styleUrl: './car-leasing-calculator.component.scss'
})
export class CarLeasingCalculatorComponent implements OnInit {
  private service = inject(MonthlyPaymentCalculatorService);
  private router = inject(Router);

  calculatorForm = this.makeForm();
  monthlyPayment$: Observable<CalculatorResponse> | undefined;
  noteActive: boolean = true;

  ngOnInit(): void {
    this.calculatorForm.valueChanges.subscribe(x => {
      this.checkDownPayment();
      this.calculateMonthlyPayment();
    })
  }

  private makeForm() {
    return new FormGroup(
      {
        carValue: new FormControl<number | null>(null, [
          Validators.required,
          Validators.min(300)
        ]),
        period: new FormControl<string>('months', [
          Validators.required,
          Validators.pattern('[^a-zA-Z]*')
        ]),
        downPayment: new FormControl<number | null>(null, [
          Validators.required,
          Validators.min(0)
        ]),
        residual: new FormControl<string>('0'),
        envFriendly: new FormControl<boolean>(false)
      });
  }

  onSubmit(): void {
    if (!this.calculatorForm.valid) {
      return;
    }

    this.service.postCarCalculatorData({
      carValue: this.carValue?.value!,
      period: this.period?.value!,
      downPayment: this.downPayment?.value!,
      residualValuePercentage: this.residual?.value!,
      isEcoFriendly: this.envFriendly?.value!,
      monthlyPayment: (document.getElementById('monthlyPayment') as HTMLInputElement).value
    });

    this.router.navigate(['registration']);
  }

  calculateMonthlyPayment(): void {
    if (this.calculatorForm.valid) {
      this.monthlyPayment$ = this.service.getMonthlyPayment(this.calculatorForm.value as Partial<CalculatorFormFields>);
      this.monthlyPayment$.subscribe(x => console.log(x));
    }

    return;
  }

  checkDownPayment() {
    if (this.downPayment?.value! / this.carValue?.value! * 100 >= 10) {
      this.noteActive = false;
      return;
    }
    this.noteActive = true;
  }

  get carValue() {
    return this.calculatorForm.get('carValue');
  }

  get downPayment() {
    return this.calculatorForm.get('downPayment');
  }

  get period() {
    return this.calculatorForm.get('period');
  }

  get residual() {
    return this.calculatorForm.get('residual');
  }

  get envFriendly() {
    return this.calculatorForm.get('envFriendly');
  }
}
