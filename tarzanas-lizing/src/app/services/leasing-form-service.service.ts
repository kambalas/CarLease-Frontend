import { Injectable } from '@angular/core';
import { Cars } from '../data/cars';
import { Observable, of } from 'rxjs';
import { Details } from '../types';

@Injectable({
  providedIn: 'root',
})
export class LeasingFormService {
  getCarMakes(): Observable<string[]> {
    return of(Cars.map((car) => car.make));
  }

  getModelsForMake(make: string): Observable<string[]> {
    const makeModels =
      Cars.find((car) => car.make === make)?.models.map(
        (model) => model.modelName
      ) || [];
    return of(makeModels);
  }

  getVariantsForModel(make: string, model: string): Observable<string[]> {
    const vehicle = Cars.find((car) => car.make === make);
    const modelObj = vehicle?.models.find(
      (modelObj) => modelObj.modelName === model
    );
    const modelVariants =
      modelObj?.variants.map((variant) => variant.variantName) || [];
    return of(modelVariants);
  }

  getDetailsForModel(
    make: string,
    model: string
  ): Observable<Details | null> {
    const vehicle = Cars.find((car) => car.make === make);
    const modelObj = vehicle?.models.find(
      (modelObj) => modelObj.modelName === model
    );
    if (modelObj) {
      return of({
        years: modelObj.years,
        fuelTypes: modelObj.fuelTypes,
        enginePowers: modelObj.enginePowers,
        engineSizes: modelObj.engineSizes,
      });
    }
    return of(null);
  }

  getDetailsForVariant(
    make: string,
    model: string,
    variant: string
  ): Observable<Details | null> {
    const vehicle = Cars.find((car) => car.make === make);
    const modelObj = vehicle?.models.find(
      (modelObj) => modelObj.modelName === model
    );
    const variantObj = modelObj?.variants.find(
      (v) => v.variantName === variant
    );
    if (variantObj) {
      return of({
        years: variantObj.years,
        fuelTypes: variantObj.fuelTypes,
        enginePowers: variantObj.enginePowers,
        engineSizes: variantObj.engineSizes,
      });
    }
    return of(null);
  }
}
