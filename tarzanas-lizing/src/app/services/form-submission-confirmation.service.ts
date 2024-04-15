import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { FormSubmissionConfirmationComponent } from '../components/user/form-submission-confirmation/form-submission-confirmation.component';

@Injectable({
  providedIn: 'root'
})
export class FormSubmissionConfirmationService {

  constructor(private dialog: MatDialog) { }

  openConfirmationDialog(): void {
    this.dialog.open(FormSubmissionConfirmationComponent, {
      width: '400px',
    });
  }
}
