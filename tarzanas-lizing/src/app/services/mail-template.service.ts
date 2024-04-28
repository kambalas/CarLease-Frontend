import { Injectable } from '@angular/core';
import { GeneralFormsResponse } from "../types";

@Injectable({
  providedIn: 'root'
})
export class MailTemplateService {

  constructor() {
  }

  companyName = 'Tarzan leasing';
  phoneNumber = '+37064206969';
  email = 'Tlizingas@gmail.com';

  getRejectionTemplate(data: Partial<GeneralFormsResponse>): string {
    const applicationId = data.ratesResponse?.id || '';
    const applicantName = `${data.personalInformationResponse?.firstName || ''}`;
    const carMake = data.leaseResponse?.make || '';
    const carModel = data.leaseResponse?.model || '';
    const carYear = data.leaseResponse?.year.trim() || '';
    const carPrice = data.ratesResponse?.carValue || '';

    return `<p>Car Leasing Application #${applicationId}</p>

<p>Dear ${applicantName},</p>

<p>We regret to inform you that after careful review, your car leasing application #${applicationId} has been rejected.</p>

<p><strong>Vehicle details:</strong> <em>${carMake} ${carModel} (${carYear})</em><br>
Price: ${carPrice} Eur</p>

<p>We understand that this news may be disappointing, and we sincerely apologize for any inconvenience caused. Unfortunately, based on our current criteria and availability, we are unable to proceed with your application at this time.</p>

<p>If you have any questions regarding the decision or would like further clarification, please do not hesitate to reach out to us at ${this.phoneNumber} or ${this.email}. We are here to assist you in any way we can.</p>

<p>We appreciate your interest in leasing with ${this.companyName}, and we encourage you to consider us for any future leasing needs you may have.</p>

<p>Thank you for your understanding.</p>

<p>Best regards,<br>
${this.companyName} <br>
${this.phoneNumber} <br>
${this.email}</p>`;
  }

  getAcceptanceTemplate(data: Partial<GeneralFormsResponse>): string {
    const applicationId = data.ratesResponse?.id || '';
    const applicantName = `${data.personalInformationResponse?.firstName || ''}`;
    const carMake = data.leaseResponse?.make || '';
    const carModel = data.leaseResponse?.model || '';
    const carYear = data.leaseResponse?.year.trim() || '';
    const carPrice = data.ratesResponse?.carValue || '';

    return `<p>Car Leasing Application #${applicationId}</p>

<p>Dear ${applicantName},</p>

<p>We are pleased to inform you that your car leasing application #${applicationId} has been confirmed!</p>

<p><strong>Vehicle details:</strong> <em>${carMake} ${carModel} (${carYear})</em><br>
Price: ${carPrice} Eur</p>

<p>We understand the importance of selecting the right vehicle and leasing terms, and we are committed to providing you with the best possible leasing options tailored to your needs.</p>

<p>Please find attached the payment plan and contract for car leasing. The contract can be signed by digital signing methods only (e.g., mobile signature or Smart-ID). Make sure to read it carefully, sign, and send the signed agreement to us by replying to this email.</p>

<p>In the meantime, if you need any assistance or have any concerns, please feel free to contact us at ${this.phoneNumber} or ${this.email}.</p>

<p>Thank you for choosing ${this.companyName} for your car leasing needs. We look forward to helping you get behind the wheel of your dream car!</p>

<p>Best regards,<br>
${this.companyName}<br>
${this.phoneNumber}<br>
${this.email}</p>`;
  }

  getMoreInfoTemplate(data: Partial<GeneralFormsResponse>): string {
    const applicationId = data.ratesResponse?.id || '';
    const applicantName = `${data.personalInformationResponse?.firstName || ''}`;

    return `<p>Car Leasing Application #${applicationId}</p>

<p>Dear ${applicantName},</p>

<p>We hope this email finds you well.</p>

<p>We are currently in the process of reviewing your car leasing application #${applicationId}, and we require some clarification on certain details to proceed further.</p>

<p>Could you please provide additional information or clarify the following details:<br>

<strong>*please write your question here *</strong></p>

<p>Your prompt response would greatly assist us in expediting the processing of your application. If you have any questions or need further clarification on the requested details, please do not hesitate to reach out to us at ${this.phoneNumber} or ${this.email}.</p>

<p>Thank you for your cooperation and understanding. We look forward to hearing back from you soon.</p>

<p>Best regards,<br>
${this.companyName}<br>
${this.phoneNumber}<br>
${this.email}</p>`;
  }

  getCancellationTemplate(data: Partial<GeneralFormsResponse>): string {
    const applicationId = data.ratesResponse?.id || '';
    const applicantName = `${data.personalInformationResponse?.firstName || ''}`;
    const carMake = data.leaseResponse?.make || '';
    const carModel = data.leaseResponse?.model || '';
    const carYear = data.leaseResponse?.year.trim() || '';
    const carPrice = data.ratesResponse?.carValue || '';

    return `<p>Car Leasing Application #${applicationId}</p>

<p>Dear ${applicantName},</p>

<p>We hope this email finds you well.</p>

<p>We regret to inform you that your car leasing application #${applicationId} has been canceled.</p>

<p><strong>Vehicle details:</strong> <em>${carMake} ${carModel} (${carYear})</em><br>
<p>Price: ${carPrice} Eur</p>

<p>Unfortunately, due to unforeseen circumstances, we have had to cancel your application. We understand that this may be disappointing news, and we apologize for any inconvenience this may cause.</p>

<p>If you have any questions about the cancellation or would like further information, please feel free to reach out to us at ${this.phoneNumber} or ${this.email}. Our team is here to assist you and address any concerns you may have.</p>

<p>We appreciate your understanding and patience in this matter. Should you wish to reapply in the future, we would be more than happy to assist you with your car leasing needs.</p>

<p>Thank you for considering ${this.companyName}.</p>

<p>Best regards,<br>
${this.companyName}<br>
${this.phoneNumber}<br>
${this.email}</p>`;
  }
}
