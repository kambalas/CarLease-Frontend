import { Component, inject } from '@angular/core';
import { EChartsOption } from 'echarts';
import { NgxEchartsDirective } from 'ngx-echarts';
import { StatisticsService } from '../../../services/statistics.service';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  private service = inject(StatisticsService);
  totalLoanValue = this.service.getYearlyAcceptedApplicationLoanValue();
  numberOfNewCustomers = this.service.getNewCustomerCount();
  numberOfHighRiskApplications = this.service.getHighRiskApplicationCount();
  applicationStatusData = this.service.getAllApplicationStatusCount();
  monthlyGraphData = this.service.getApplicationCountCurrentMonth();
  currentDate = new Date();
  daysOfCurrentMonth = this.getDaysInMonth(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1)

  calculateDifference(current: number, previous: number) {
    return Math.round((current - previous) / previous * 100);
  }

  getDaysInMonth(year: number, month: number): string[] {
    const numDays = new Date(year, month, 0).getDate();
    console.log(numDays)
    return Array.from({ length: numDays }, (_, index) => month + "/" + (index + 1));
  }

  lineChartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: this.daysOfCurrentMonth,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: this.monthlyGraphData,
        type: 'line',
      },
    ],
  };

  pieChartOption: EChartsOption = {
    legend: {
      orient: 'horizontal',
      align: 'auto',
      data: ['Accepted', 'Rejected', 'Pending', 'New']
    },
    series: [
      {
        type: 'pie',
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            formatter: '{b}: {c}',
            backgroundColor: 'white',
            borderColor: 'inherit',
            borderWidth: 1,
            padding: 10,
            borderRadius: 5
          }
        },
        data: [
          { value: this.applicationStatusData.accepted, name: 'Accepted' },
          { value: this.applicationStatusData.rejected, name: 'Rejected' },
          { value: this.applicationStatusData.pending, name: 'Pending' },
          { value: this.applicationStatusData.new, name: 'New' }
        ],
        radius: ['40%', '70%']
      }
    ]
  };
}
