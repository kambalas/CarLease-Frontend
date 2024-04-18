export interface CalculatorFormFields {
  carValue: number;
  period: string;
  downPayment: number;
  residualValuePercentage: string;
  isEcoFriendly: boolean;
  monthlyPayment: string;
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

export interface personalInfoDetails {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
  pid: string;
  date: Date;
  maritalStatus: string[];
  childrenCount: number;
  citizenship: string[];
  montlyIncome: number;
}

export interface Application {
  id: string;
  firstName: string;
  secondName: string;
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

