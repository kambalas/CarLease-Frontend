import { Component, OnInit, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { FormDataTransferService } from '../../../services/form-data-transfer.service';

@Component({
  selector: 'app-personal-information-form',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatStepperModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './personal-information-form.component.html',
  styleUrl: './personal-information-form.component.scss',
})
export class PersonalInformationFormComponent implements OnInit {
  private transferService = inject(FormDataTransferService);

  personalInformationForm = this.makeForm();

  ngOnInit(): void {}
  private makeForm() {
    return new FormGroup({
      firstName: new FormControl<string | null>(null, [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ]*$'),

      ]),
      secondName: new FormControl<string | null>(null, [
        Validators.required,
        Validators.pattern('^[a-zA-ZÀ-ÿ]*$'),
      ]),
      email: new FormControl<string | null>(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
      ]),
      phone: new FormControl<string | null>(null, [
        Validators.required,
        Validators.pattern('^\\+[0-9]{1,}$'),
      ]),

      childrenCount: new FormControl<number | null>(null, [
        Validators.required,
        Validators.pattern(/^[0-9]\d*$/),
      ]),

      date: new FormControl<number | null>(null, [
        Validators.required,
        this.minimumAgeValidator(18),
      ]),
      montlyIncome: new FormControl<number | null>(null, [
        Validators.required,
        Validators.min(0),
        Validators.pattern(/^\d+$/),
      ]),
      pid: new FormControl<string | null>(null, [
        Validators.required]),

      maritalStatus: new FormControl<string | null>(null, [
        Validators.required,
        Validators.pattern(/^(Single|Married|Partnership)$/),
      ]),
      citizenship: new FormControl<string>('Lithuania', [
        Validators.required,
        Validators.pattern(
          /^(Austria|Belgium|Bulgaria|Croatia|Cyprus|Czech Republic|Denmark|Estonia|Finland|France|Germany|Greece|Hungary|Ireland|Italy|Latvia|Lithuania|Luxembourg|Malta|Netherlands|Poland|Portugal|Romania|Slovakia|Slovenia|Spain|Sweden)$/
        ),
      ]),
    });
  }

  minimumAgeValidator(minAge: number) {
    return (control: any) => {
      const birthDate = new Date(control.value);
      const today = new Date();
      const minAgeDate = new Date();
      minAgeDate.setFullYear(today.getFullYear() - minAge);
      if (birthDate > minAgeDate) {
        return { minimumAge: true };
      }
      return null;
    };
  }

  onSubmit(): void {
    if (!this.personalInformationForm.valid) {
      return;
    }
    this.transferService.setPersonalInformationData({
      firstName: this.personalInformationForm.value.firstName!,
      lastName: this.personalInformationForm.value.secondName!,
      email: this.personalInformationForm.value.email!,
      phoneNumber: this.personalInformationForm.value.phone!,
      pid: this.personalInformationForm.value.pid!,
      dateOfBirth: this.personalInformationForm.value.date!,
      maritalStatus: this.personalInformationForm.value.maritalStatus!,
      numberOfChildren: this.personalInformationForm.value.childrenCount!,
      citizenship: this.personalInformationForm.value.citizenship!,
      monthlyIncome: this.personalInformationForm.value.montlyIncome!,
    });
  }
}
