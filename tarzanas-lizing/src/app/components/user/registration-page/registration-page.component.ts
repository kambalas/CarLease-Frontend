import { Component } from '@angular/core';
import { PersonalInformationFormComponent } from '../personal-information-form/personal-information-form.component';
import { CarLeasingFormComponent } from '../car-leasing-form/car-leasing-form.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    PersonalInformationFormComponent,
    CarLeasingFormComponent,
    MatStepperModule,
    MatButtonModule],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {

}
