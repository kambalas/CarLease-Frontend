import { Component, OnInit, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { PersonalInfoService } from '../../../services/personal-info.service';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';

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
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './personal-information-form.component.html',
  styleUrl: './personal-information-form.component.scss',
})
export class PersonalInformationFormComponent implements OnInit {
  private service = inject(PersonalInfoService);
  private router = inject(Router);

  personalInformationForm = this.makeForm();

  ngOnInit(): void {}
  private makeForm() {
    return new FormGroup({
      firstName: new FormControl<string | null>(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z-]*$'),
      ]),
      secondName: new FormControl<string | null>(null, [
        Validators.required,
        Validators.pattern('^[a-zA-Z-]*$'),
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
        Validators.pattern(/^\d+$/),
      ]),

      date: new FormControl<number | null>(null, [
        Validators.required, this.minimumAgeValidator(18),
      ]),
      montlyIncome: new FormControl<number | null>(null, [
        Validators.required,
        Validators.min(0),
      ]),
    });
  }

  minimumAgeValidator(minAge: number) {
    return (control:any) => {
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
  }
}
