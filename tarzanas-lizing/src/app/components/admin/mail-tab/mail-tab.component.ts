import { Component, inject, OnInit, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { MailService } from '../../../services/mail.service';
import {GeneralFormsResponse, MailRequest, Status} from '../../../types';
import {MailTemplateService } from "../../../services/mail-template.service";
import { MatInputModule } from '@angular/material/input';

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


  selectedTemplate: string = '';
  private service = inject(MailTemplateService);

  get mailContent(): string {
    const data: Partial<GeneralFormsResponse> = {...this.dataForEmailTab()};
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

  private mailService = inject(MailService);
  testMailRequest: MailRequest = {
    applicationId: -1,
    mailText: 'mocked',
    mailRecipient: 'mock@address.com',
  };

  sendMail(): void {
    alert('Your email sent!');
    this.mailService.updateStatus(this.applicationId(), this.status).subscribe((x) => console.log(x));
    this.mailService.sendMail(this.testMailRequest).subscribe((x) => console.log(x)
    );
  }
}
