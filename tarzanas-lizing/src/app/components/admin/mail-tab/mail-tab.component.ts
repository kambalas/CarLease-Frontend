import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { MailService } from '../../../services/mail.service';
import { MailRequest } from '../../../types';


@Component({
  selector: 'app-mail-tab',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatFormField,
    MatLabel,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
  ],
  templateUrl: './mail-tab.component.html',
  styleUrl: './mail-tab.component.scss',
})
export class MailTabComponent {
  selectedTemplate: string = '';


  private mailService = inject(MailService);
  testMailRequest: MailRequest = {
    applicationId: -1,
    mailText: 'mock',
    mailRecipient: 'mock@address.com',
  };

  sendMail(): void {
    alert('Your email sent!');
    this.mailService.sendMail(this.testMailRequest).subscribe((x) => console.log(x)
    );
  }
}
