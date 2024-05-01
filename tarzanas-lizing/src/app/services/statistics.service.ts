import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApplicationStatusCountResponse } from '../types';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  private client = inject(HttpClient);

  getAllApplicationStatusCount(): ApplicationStatusCountResponse {
    return {
      new: 15,
      accepted: 20,
      rejected: 5,
      pending: 8
    }
    //this.client.get();
  }

  getApplicationCountCurrentMonth(): number[] {
    return [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
  }

  getYearlyAcceptedApplicationLoanValue(): number {
    return 20000;
  }

  getNewCustomerCount(): { currentMonth: number, lastMonth: number } {
    return { currentMonth: 26, lastMonth: 20 }
  }

  getHighRiskApplicationCount(): { currentMonth: number, lastMonth: number } {
    return { currentMonth: 5, lastMonth: 3 }
  }

}
