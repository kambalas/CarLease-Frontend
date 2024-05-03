import { Component, inject, OnInit, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { MailService } from '../../../services/mail.service';
import { GeneralFormsResponse, MailRequest, Status } from '../../../types';
import { MailTemplateService } from "../../../services/mail-template.service";
import { MatInputModule } from '@angular/material/input';
import { EmailConfirmationService } from '../../../services/email-confirmation.service';

@Component({
  selector: 'app-mail-tab',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
  ],
  templateUrl: './mail-tab.component.html',
  styleUrl: './mail-tab.component.scss',
})

export class MailTabComponent implements OnInit {
  dataForEmailTab = input<GeneralFormsResponse>();
  applicationId = input<string>();
  status!: Status;
  isEditing = false;
  selectedTemplate: string = '';
  editableMailContent = '';

  private service = inject(MailTemplateService);
  private emailModalService = inject(EmailConfirmationService);
  private mailService = inject(MailService);

  get mailContent(): string {
    const data: Partial<GeneralFormsResponse> = { ...this.dataForEmailTab() };
    switch (this.selectedTemplate) {
      case 'rejected':
        this.status = Status.REJECTED;
        return this.service.getRejectionTemplate(data);
      case 'accepted':
        this.status = Status.ACCEPTED;
        return this.service.getAcceptanceTemplate(data);
      case 'more-info':
        this.status = Status.PENDING;
        return this.service.getMoreInfoTemplate(data);
      case 'cancelled':
        this.status = Status.REJECTED;
        return this.service.getCancellationTemplate(data);
      default:
        return '';
    }
  }

  ngOnInit(): void {
    console.log(this.dataForEmailTab()?.personalInformationResponse?.email);
  }

  stripHtmlTags(htmlContent: string): string {
    return htmlContent.replace(/<[^>]*>/g, ''); // Regex to remove HTML tags
  }
  onTemplateSelect(): void {
    this.isEditing = true;
    this.editableMailContent = this.stripHtmlTags(this.mailContent);
  }

  sendMail(): void {
    this.mailService.updateStatus(this.applicationId(), this.status).subscribe((x) => console.log(x));

    if (!this.editableMailContent.trim()) {
      alert('Error: Email content is empty. Cannot send email.');
      return;
    }

    const applicationIdNumber = Number(this.applicationId());

    const mailRequest: MailRequest = {
      applicationId: applicationIdNumber,
      mailSubject: `Car Leasing Application #${applicationIdNumber}`,
      mailText: this.editableMailContent,
      mailRecipient: this.dataForEmailTab()?.personalInformationResponse?.email || '',
    };

    this.mailService.sendMail(mailRequest).subscribe({
      next: (response) => {
        this.emailModalService
          .openConfirmationDialog()
      },
      error: (error) => {
        console.error('Error sending email:', error);
        alert('Failed to send email. Please try again.');
      }
    });

    this.mailService.updateStatus(this.applicationId(), this.status).subscribe({
      next: (response) => console.log('Status updated:', response),
      error: (error) => console.error('Error updating status:', error)
    });
  }
}
