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
  offer?: string;
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

export interface Model {
  id: number;
  name: string;
}

export interface Variant {
  id: number;
  name: string;
}

export interface ModelInfoAPIResponse {
  variants: Variant[];
  years: number[];
  fuelTypes: string[];
  enginePowers: number[];
  engineSizes: string[];
}

export interface ModelInfo {
  variants: Variant[];
  details: Details;
}

export interface Details {
  years: number[];
  fuelTypes: string[];
  enginePowers: number[];
  engineSizes: string[];
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
  id: number;
  firstName: string;
  lastName: string;
  isOpened: boolean;
  updatedAt: string;
  status: Status;
  isHighRisk: boolean;
}

export interface sortAndFilterRequest {
  page: string,
  STATUS: Status[] | null,
  searchQuery: string | null,
}

export const enum Status {
  NEW = "NEW",
  UPDATED = "UPDATED",
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}

export interface NoteRequest {
  applicationId: number;
  noteText: string;
}

export interface NoteResponse {
  noteText: string;
}

type Notes = NoteResponse[];

export interface NoteTextResponse {
  notesText: string;
  createdAt: string;
}

export interface MailTextResponse {
  mailText: string;
  createdAt: string;
}

export interface MailsAndNotesResponse {
  applicationId: number;
  notesTexts: NoteTextResponse[];
  mailTexts: MailTextResponse[];
}

export interface GeneralFormsResponse {
  ratesResponse: {
    id: string;
    carValue: string;
    period: number;
    downPayment: string;
    residualValuePercentage: string;
    isEcoFriendly: boolean;
    monthlyPayment: string;
  };
  personalInformationResponse: {
    id: string;
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
  };
  leaseResponse: {
    id: string;
    make: string;
    model: string;
    modelVariant: string;
    year: string;
    fuelType: string;
    enginePower: string;
    engineSize: string;
    url: string;
    offer: string;
    terms: boolean;
    confirmation: boolean;
  };
}

export interface GeneralAllFormsResponse {
  ratesResponse: {
    id: string;
    carValue: string;
    period: number;
    downPayment: string;
    residualValuePercentage: string;
    isEcoFriendly: boolean;
    monthlyPayment: string;
  };
  personalInformationResponse: {
    id: number;
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
  };
  leaseResponse: {
    id: number;
    make: string;
    model: string;
    modelVariant: string;
    year: string;
    fuelType: string;
    enginePower: string;
    engineSize: string;
    url: string;
    offer: string;
    terms: boolean;
    confirmation: boolean;
  };
  statusResponse: {
    id: number;
    applicationStatus: Status;
    isOpened: boolean;
    updatedAt: string;
    createdAt: string;
  };
}
export interface LoginFormFields {
  username: string;
  password: string;
}
export interface LoginFormRequest {
  username: string;
  password: string;
}

export interface MailRequest {
  applicationId: number;
  mailSubject: string;
  mailText: string;
  mailRecipient: string;
}
export interface MailResponse {
  applicationId: number;
  mailSubject: string;
  mailText: string;
  mailRecipient: string;
}
