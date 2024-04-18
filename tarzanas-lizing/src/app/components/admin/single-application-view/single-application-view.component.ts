import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { of } from 'rxjs';

@Component({
  selector: 'app-single-application-view',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, AsyncPipe],
  templateUrl: './single-application-view.component.html',
  styleUrl: './single-application-view.component.scss'
})
export class SingleApplicationViewComponent {
  responseData$ = of({
    firstName: "Bob",
    lastName: "Bobby",
    numberOfChildren: 2,
    maritalStatus: "married",
    citizenship: "Lithuania",
    dateOfBirth: new Date(1966, 2, 25),
    phone: "+3705656565",
    email: "bob.bobby@mail.com",
    monthlyIncome: 5000,
    carMake: "Toyota",
    carModel: "idk",
    carModelVatiant: "idk",
    carOfferUrl: "",
    period: 24,
    monthlyPayment: 500,
    residualValue: 10,
    isEnvFriendly: true,
    downPayment: 500,
    carValue: 30000
  })

  calulateAge(birthdate: Date): number {
    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    return age;
  }
}
