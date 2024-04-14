import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Observable, switchMap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ModelDetails, VariantDetails } from '../../../types';
import { LeasingFormService } from '../../../services/leasing-form-service.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-car-leasing-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    JsonPipe,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './car-leasing-form.component.html',
  styleUrl: './car-leasing-form.component.scss',
})
export class CarLeasingFormComponent implements OnInit {
  carLeasingForm!: FormGroup;
  carMakes: string[] = [];
  carModels$!: Observable<string[]>;
  carModelVariants$!: Observable<string[]>;
  modelDetails$!: Observable<ModelDetails | null>;
  variantDetails$!: Observable<VariantDetails | null>;
  selectedFile: any = null;

  constructor(
    private formBuilder: FormBuilder,
    private leasingFormService: LeasingFormService
  ) {}

  ngOnInit() {
    this.carMakes = this.leasingFormService.getCarMakes();

    this.carLeasingForm = this.formBuilder.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      modelVariant: [''],
      year: ['', Validators.required],
      fuelType: ['', Validators.required],
      enginePower: ['', Validators.required],
      engineSize: ['', Validators.required],
      url: [''],
      offer: [''],
      terms: [false, Validators.requiredTrue],
      confirmation: [false, Validators.requiredTrue],
    });

    const makeControl = this.carLeasingForm.get('make');
    const modelControl = this.carLeasingForm.get('model');
    const modelVariantControl = this.carLeasingForm.get('modelVariant');

    if (makeControl) {
      this.carModels$ = makeControl.valueChanges.pipe(
        switchMap((selectedMake) => {
          return this.leasingFormService.getModelsForMake(selectedMake);
        })
      );
    }

    if (modelControl && makeControl) {
      this.carModelVariants$ = modelControl.valueChanges.pipe(
        switchMap((selectedModel) => {
          return this.leasingFormService.getVariantsForModel(
            makeControl.value,
            selectedModel
          );
        })
      );
    }

    //sets modelDetails$; years, fuelTypes, enginePowers and engineSizes of all variants displayed

    if (modelControl && makeControl) {
      this.modelDetails$ = modelControl.valueChanges.pipe(
        switchMap((selectedModel) => {
          return this.leasingFormService.getDetailsForModel(
            makeControl.value,
            selectedModel
          );
        })
      );
    }

    //sets variantDetails$; years, fuel types, engine powers and engine sizes of the selected variant displayed

    if (modelVariantControl && modelControl && makeControl) {
      this.variantDetails$ = modelVariantControl.valueChanges.pipe(
        switchMap((selectedVariant) => {
          return this.leasingFormService.getDetailsForVariant(
            makeControl.value,
            modelControl.value,
            selectedVariant
          );
        })
      );
    }
  }

  onSubmit(): void {
    if (this.carLeasingForm.valid) {
      console.log('Form Submitted!', this.carLeasingForm.value);
    }
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  changeColor(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    selectElement.style.color = selectElement.value ? 'black' : '#999';
  }

  getButtonColor() {
    return this.carLeasingForm.valid ? 'primary' : 'warn';
  }
}
