export interface CalculatorFormFields {
    carValue: number;
    period: string;
    downPayment: number;
    residualValuePercentage: string;
    isEcoFriendly: boolean,
    monthlyPayment: string
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

export interface ModelDetails {
  years: number[];
  fuelTypes: string[];
  enginePowers: number[];
  engineSizes: number[];
}

export interface VariantDetails {
  years: number[];
  fuelTypes: string[];
  enginePowers: number[];
  engineSizes: number[];
}
