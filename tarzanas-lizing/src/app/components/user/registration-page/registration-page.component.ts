import { Component } from '@angular/core';
import { PersonalInformationFormComponent } from '../personal-information-form/personal-information-form.component';
import { CarLeasingFormComponent } from '../car-leasing-form/car-leasing-form.component';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [PersonalInformationFormComponent, CarLeasingFormComponent],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {

}
