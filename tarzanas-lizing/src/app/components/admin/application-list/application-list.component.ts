import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Observable, of } from 'rxjs';
import { ApplicationListService } from '../../../services/application-list.service';
import { GeneralAllFormsResponse } from '../../../types';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatFormField, MatInput, AsyncPipe],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.scss'
})
export class ApplicationListComponent implements OnInit {
  private service = inject(ApplicationListService);
  OnSelectedId = output<string>();

  listResponse$: Observable<GeneralAllFormsResponse[]> = of([]);

  ngOnInit(): void {
    this.listResponse$ = this.service.getAllApplications();
  }

  openSelected(id: number) {
    if (id) {
      this.OnSelectedId.emit(id.toString())
    }
  }
}
