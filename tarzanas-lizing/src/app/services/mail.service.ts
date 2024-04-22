import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { MailRequest, MailResponse } from '../types';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MailService {
  private client = inject(HttpClient);

  sendMail():Observable<any> {
    const testMailRequest: MailRequest = {
      applicationId: 1,
      mailText: 'text',
      mailRecipient: 'address@addres.com'
    };
    const response =  this.client.post<MailResponse>('https://ci-cd-spring.onrender.com/admin/mail/create', testMailRequest)

    return response;
  }
}
