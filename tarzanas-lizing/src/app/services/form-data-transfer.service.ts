import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import { CalculatorFormFields, CarLeasingFormFields, FormsPostRequest, PersonalInformationFormFields } from '../types';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FormDataTransferService {
  private client = inject(HttpClient);

  private calculatorData$ = new BehaviorSubject<CalculatorFormFields>({
    carValue: 0,
    period: "",
    downPayment: 0,
    residualValuePercentage: "",
    isEcoFriendly: false,
    monthlyPayment: ""
  });

  private carLeaseData$ = new BehaviorSubject<CarLeasingFormFields>({
    make: "",
    model: "",
    modelVariant: "",
    fuelType: "",
    enginePower: 0,
    engineSize: 0,
    year: "",
    url: "",
    offer: "",
    terms: false,
    confirmation: false
  });

  private personalInformationData$ = new BehaviorSubject<PersonalInformationFormFields>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    pid: "",
    dateOfBirth: 0,
    maritalStatus: "",
    numberOfChildren: 0,
    citizenship: "",
    monthlyIncome: 0
  })

  setCalculatorData(formData: CalculatorFormFields) {
    this.calculatorData$.next(formData);
  }

  setCarLeaseData(formData: CarLeasingFormFields) {
    this.carLeaseData$.next(formData);
  }

  setPersonalInformationData(formData: PersonalInformationFormFields) {
    this.personalInformationData$.next(formData);
  }

  postAllFormData(): Observable<any> {
    combineLatest({
      ratesRequest: this.calculatorData$,
      personalInformationRequest: this.personalInformationData$,
      leaseRequest: this.carLeaseData$
    })
      .subscribe(x => console.log(x));

    return of('temporary');
    //return this.client.post<FormsPostRequest>('https://ci-cd-spring.onrender.com/applications/create', { ratesRequest, personalInformationRequest, leaseRequest });
  }
}
