import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Details,
  Model,
  ModelInfo,
  ModelInfoAPIResponse,
  Variant,
} from '../types';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LeasingFormService {
  constructor(private http: HttpClient) {}

  getCarMakes(): Observable<string[]> {
    return this.http
      .get<{ carMakes: string[] }>('http://localhost:8080/carApi/makes')
      .pipe(map((response) => response.carMakes));
  }

  getModelsForMake(make: string): Observable<Model[]> {
    return this.http
      .get<{ carModels: Model[] }>(
        `http://localhost:8080/carApi/models?make=${make}`
      )
      .pipe(map((response) => response.carModels));
  }

  getInfoForModel(modelID: number): Observable<ModelInfo> {
    return this.http
      .get<ModelInfoAPIResponse>(
        `http://localhost:8080/carApi/model_info?model_id=${modelID}`
      )
      .pipe(
        map((response) => {
          if (response) {
            return {
              variants: response.variants,
              details: {
                years: response.years,
                fuelTypes: response.fuelTypes,
                enginePowers: response.enginePowers,
                engineSizes: response.engineSizes,
              },
            };
          } else {
            throw new Error('Invalid response from server');
          }
        })
      );
  }

  getInfoForVariant(variantID: number): Observable<Details> {
    return this.http.get<Details>(
      `http://localhost:8080/carApi/variant_info?variant_id=${variantID}`
    );
  }

  findModelByName(
    modelName: string,
    carModels$: Observable<Model[]>
  ): Observable<Model> {
    return carModels$.pipe(
      map((models) => {
        const model = models.find((model) => model.name === modelName);
        if (model) {
          return model;
        } else {
          throw new Error(`Model with name ${modelName} not found`);
        }
      })
    );
  }

  findVariantByName(
    variantName: string,
    carModelVariants$: Observable<Variant[]>
  ): Observable<Variant> {
    return carModelVariants$.pipe(
      map((variants) => {
        const variant = variants.find(
          (variant) => variant.name === variantName
        );
        if (variant) {
          return variant;
        } else {
          throw new Error(`Variant with name ${variantName} not found`);
        }
      })
    );
  }
}
