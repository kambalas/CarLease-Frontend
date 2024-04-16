import { Component, OnInit, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Observable, switchMap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Details } from '../../../types';
import { LeasingFormService } from '../../../services/leasing-form-service.service';
import { FormSubmissionConfirmationService } from '../../../services/form-submission-confirmation.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgIf } from '@angular/common';
import { FormDataTransferService } from '../../../services/form-data-transfer.service';

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
  carMakes$!: Observable<string[]>;
  carModels$!: Observable<string[]>;
  carModelVariants$!: Observable<string[]>;
  carDetails$!: Observable<Details | null>;
  selectedFile: any = null;

  private transferService = inject(FormDataTransferService);

  constructor(
    private formBuilder: FormBuilder,
    private leasingFormService: LeasingFormService,
    private submissionConfirmationService: FormSubmissionConfirmationService
  ) { }

  ngOnInit() {
    this.carMakes$ = this.leasingFormService.getCarMakes();

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

    if (makeControl) {
      makeControl.valueChanges.subscribe(() => {
        this.carLeasingForm.patchValue({
          model: '',
          modelVariant: '',
          year: '',
          fuelType: '',
          enginePower: '',
          engineSize: '',
          url: '',
          offer: '',
          terms: false,
          confirmation: false,
        });
      });
    }

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
  }

  onSubmit(): void {
    if (this.carLeasingForm.valid) {
      console.log('Form Submitted!', this.carLeasingForm.value);
      this.submissionConfirmationService.openConfirmationDialog();
      this.transferService.setCarLeaseData(this.carLeasingForm.value);
      this.transferService.postAllFormData();
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

  onSelectModel(event: Event) {
    this.changeColor(event);
    const makeControl = this.carLeasingForm.get('make');
    const modelControl = this.carLeasingForm.get('model');

    if (modelControl && makeControl) {
      const selectedMake = makeControl.value;
      const selectedModel = modelControl.value;

      if (selectedMake && selectedModel) {
        this.carDetails$ = this.leasingFormService.getDetailsForModel(
          selectedMake,
          selectedModel
        );
      }
    }
  }

  onSelectModelVariant(event: Event) {
    this.changeColor(event);
    const makeControl = this.carLeasingForm.get('make');
    const modelControl = this.carLeasingForm.get('model');
    const modelVariantControl = this.carLeasingForm.get('modelVariant');

    if (modelVariantControl && modelControl && makeControl) {
      const selectedMake = makeControl.value;
      const selectedModel = modelControl.value;
      const selectedVariant = modelVariantControl.value;

      if (selectedMake && selectedModel && selectedVariant) {
        this.carDetails$ = this.leasingFormService.getDetailsForVariant(
          selectedMake,
          selectedModel,
          selectedVariant
        );
      }
    }
  }
}
