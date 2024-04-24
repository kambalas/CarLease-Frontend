import { Component, OnInit, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  BehaviorSubject,
  Observable,
  Subject,
  of,
  switchMap,
  takeUntil,
} from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Details, Model, Variant } from '../../../types';
import { LeasingFormService } from '../../../services/leasing-form-service.service';
import { FormSubmissionConfirmationService } from '../../../services/form-submission-confirmation.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
  carModels$ = new BehaviorSubject<Model[]>([]);
  carModelVariants$!: Observable<Variant[]>;
  carDetails$!: Observable<Details | null>;
  selectedFile: File | null = null;
  base64File: string = '';

  private transferService = inject(FormDataTransferService);
  private makeChange$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private leasingFormService: LeasingFormService,
    private submissionConfirmationService: FormSubmissionConfirmationService
  ) {}

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
        this.makeChange$.next();
      });
    }

    if (makeControl) {
      makeControl.valueChanges
        .pipe(
          switchMap((selectedMake) => {
            return this.leasingFormService.getModelsForMake(selectedMake);
          })
        )
        .subscribe((models) => {
          this.carModels$.next(models);
        });
    }
  }

  onSelectModel() {
    const modelControl = this.carLeasingForm.get('model');

    if (modelControl) {
      const selectedModelName = modelControl.value;

      this.leasingFormService
        .findModelByName(selectedModelName, this.carModels$)
        .pipe(
          switchMap((model) =>
            this.leasingFormService.getInfoForModel(model.id)
          ),
          takeUntil(this.makeChange$)
        )
        .subscribe((response) => {
          this.carModelVariants$ = of(response.variants);
          this.carDetails$ = of(response.details);
        });
    }
  }

  onSelectModelVariant() {
    const variantControl = this.carLeasingForm.get('modelVariant');

    if (variantControl) {
      const selectedVariantName = variantControl.value;

      this.leasingFormService
        .findVariantByName(selectedVariantName, this.carModelVariants$)
        .pipe(
          switchMap((variant) =>
            this.leasingFormService.getInfoForVariant(variant.id)
          )
        )
        .subscribe((response) => {
          this.carDetails$ = of(response);
        });
    }
  }

  onSubmit(): void {
    if (this.carLeasingForm.valid) {
      console.log('Form Submitted!', this.carLeasingForm.value);
      this.submissionConfirmationService.openConfirmationDialog();
      this.transferService.setCarLeaseData(this.carLeasingForm.value);
      this.transferService.postAllFormData().subscribe((x) => console.log(x));
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0] ?? null;
    if (file) {
        this.convertFileToBase64(file, (base64: string) => {
            this.base64File = base64;
            console.log('File in Base64:', this.base64File);
        });
    } else {
        this.base64File = '';
    }
}

  getButtonColor() {
    return this.carLeasingForm.valid ? 'primary' : 'warn';
  }
  convertFileToBase64(file: File, callback: (result: string) => void): void {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const base64String = reader.result as string;
        callback(base64String.split(',')[1]);  // Split and remove the data URL prefix
    };
    reader.onerror = (error) => {
        console.error('Error converting file:', error);
    };
}
}
