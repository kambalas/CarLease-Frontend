export interface CalculatorFormFields {
  carValue: number;
  period: string;
  downPayment: number;
  residualValuePercentage: string;
  isEcoFriendly: boolean;
  monthlyPayment: string;
}

export interface PersonalInformationFormFields {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  pid: string;
  dateOfBirth: number;
  maritalStatus: string;
  numberOfChildren: number;
  citizenship: string;
  monthlyIncome: number;
}

export interface CarLeasingFormFields {
  make: string;
  model: string;
  modelVariant: string;
  year: string;
  fuelType: string;
  enginePower: number;
  engineSize: number;
  url: string;
  offer: string;
  terms: boolean;
  confirmation: boolean;
}

export interface FormsPostRequest {
  ratesRequest: CalculatorFormFields;
  personalInformationRequest: PersonalInformationFormFields;
  leaseRequest: CarLeasingFormFields;
}

export interface CalculatorRequest {
  carValue: number;
  period: string;
  downPayment: number;
  residualValuePercentage: string;
  isEcoFriendly: boolean;
}

export interface CalculatorResponse {
  monthlyPayment: number;
}

export interface Car {
  make: string;
  models: Model[];
}

export interface Model {
  modelName: string;
  variants: Variant[];
  years: number[];
  fuelTypes: string[];
  enginePowers: number[];
  engineSizes: number[];
}

export interface Variant {
  variantName: string;
  years: number[];
  fuelTypes: string[];
  enginePowers: number[];
  engineSizes: number[];
}

export interface Details {
  years: number[];
  fuelTypes: string[];
  enginePowers: number[];
  engineSizes: number[];
}

export interface PersonalInfoDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  pid: string;
  dateOfBirth: string;
  maritalStatus: string;
  numberOfChildren: number;
  citizenship: string;
  monthlyIncome: string;
}

export interface Application {
  id: string;
  firstName: string;
  secondName: string;
  isOpened: boolean;
  dateSubmitted: Date;
  dateUpdated: Date;
  status: Status;
}

export const enum Status {
  NEW = 'new',
  UPDATED = 'updated',
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  REJECTED = 'rejected',
}

export interface NoteRequest {
  applicationId: number;
  noteText: string;
}

export interface NoteResponse {
  noteText: string;
}

export interface GeneralFormsResponse {
  ratesResponse: {
    id: string,
    carValue: string,
    period: number,
    downPayment: string,
    residualValuePercentage: string,
    isEcoFriendly: boolean,
    monthlyPayment: string
  },
  personalInformationResponse: {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    pid: string,
    dateOfBirth: string,
    maritalStatus: string,
    numberOfChildren: number,
    citizenship: string,
    monthlyIncome: string
  },
  leaseResponse: {
    id: string,
    make: string,
    model: string,
    modelVariant: string,
    year: string,
    fuelType: string,
    enginePower: string,
    engineSize: string,
    url: string,
    offer: string,
    terms: boolean,
    confirmation: boolean
  }
}

export interface GeneralAllFormsResponse {
  ratesResponse: {
    id: string,
    carValue: string,
    period: number,
    downPayment: string,
    residualValuePercentage: string,
    isEcoFriendly: boolean,
    monthlyPayment: string
  },
  personalInformationResponse: {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phoneNumber: string,
    pid: string,
    dateOfBirth: string,
    maritalStatus: string,
    numberOfChildren: number,
    citizenship: string,
    monthlyIncome: string
  },
  leaseResponse: {
    id: number,
    make: string,
    model: string,
    modelVariant: string,
    year: string,
    fuelType: string,
    enginePower: string,
    engineSize: string,
    url: string,
    offer: string,
    terms: boolean,
    confirmation: boolean
  },
  statusResponse: {
    id: number,
    applicationStatus: Status,
    isOpened: boolean,
    updatedAt: string,
    createdAt: string
  }
}



