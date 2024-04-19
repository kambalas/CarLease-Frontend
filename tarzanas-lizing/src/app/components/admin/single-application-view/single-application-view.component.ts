import { AsyncPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ApplicationListService } from '../../../services/application-list.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-single-application-view',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, AsyncPipe],
  templateUrl: './single-application-view.component.html',
  styleUrl: './single-application-view.component.scss'
})
export class SingleApplicationViewComponent {
  selectedId = input<string>();
  private service = inject(ApplicationListService);

  //responseData$ = this.service.getPersonalAndLeaseData(this.selectedId()!);

  responseData$ = of({
    RatesResponse: {
      id: "123",
      carValue: "50000",
      period: 5,
      downPayment: "5000",
      residualValuePercentage: 20,
      isEcoFriendly: true,
      monthlyPayment: "5000"
    },
    PersonalInformationResponse: {
      id: "123",
      firstName: "Bob",
      lastName: "Bobber",
      email: "bob.bobber@mail.com",
      phoneNumber: "+5684254",
      pid: "4564564645",
      dateOfBirth: new Date(),
      maritalStatus: "married",
      numberOfChildren: 3,
      citizenship: "Estonia",
      monthlyIncome: "4000"
    },
    LeaseResponse: {
      id: "123",
      make: "Toyota",
      model: "Corolla",
      modelVariant: "idk",
      year: "2016",
      fuelType: "gasoline",
      enginePower: "idk",
      engineSize: "idk",
      url: "",
      offer: "",
      terms: true,
      confirmation: true
    }
  });

  calulateAge(birthdate: Date): number {
    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    return age;
  }

  residualToEur(residualValue: number, carValue: string) {
    return parseFloat(carValue) * (residualValue / 100)
  }
}
