import { AsyncPipe } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { ApplicationListService } from '../../../services/application-list.service';
import { Observable, of } from 'rxjs';
import { GeneralFormsResponse } from '../../../types';

@Component({
  selector: 'app-single-application-view',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, AsyncPipe],
  templateUrl: './single-application-view.component.html',
  styleUrl: './single-application-view.component.scss'
})
export class SingleApplicationViewComponent implements OnInit, OnChanges {
  selectedId = input<string>();
  responseData$: Observable<GeneralFormsResponse> = of();
  private service = inject(ApplicationListService);

  ngOnInit(): void {
    this.responseData$ = this.service.getPersonalAndLeaseData(this.selectedId()!);
    this.responseData$.subscribe(x => console.log(x))
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.responseData$ = this.service.getPersonalAndLeaseData(changes['selectedId'].currentValue);
  }

  calulateAge(birthdateString: string): number {
    let birthdate = new Date(birthdateString);
    let timeDiff = Math.abs(Date.now() - birthdate.getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    return age;
  }

  residualToEur(residualValue: string, carValue: string) {
    return parseFloat(carValue) * (parseInt(residualValue) / 100)
  }
}
