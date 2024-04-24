import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { BehaviorSubject, Observable, Subject, debounceTime, map, of, switchMap, tap } from 'rxjs';
import { ApplicationListService } from '../../../services/application-list.service';
import { Application, Status, sortAndFilterRequest } from '../../../types';
import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [ReactiveFormsModule, MatCardModule, MatDividerModule, MatButtonModule, MatFormField, MatInput, AsyncPipe, MatSelectModule],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.scss'
})
export class ApplicationListComponent implements OnInit {
  private service = inject(ApplicationListService);
  OnSelectedId = output<string>();
  subject = new BehaviorSubject<sortAndFilterRequest>({ page: "1", STATUS: null, searchQuery: null });
  sortForm = new FormGroup({
    searchQuery: new FormControl<string | null>(null),
    selectedStatus: new FormControl<Status[] | null>(null)
  });

  listResponse$: Observable<Application[]> = of([]);

  ngOnInit(): void {
    // this.listResponse$ = this.service.getAllApplications();
    this.listResponse$ = this.subject.pipe(
      debounceTime(500),
      switchMap((request) => this.service.getApplicationsByStatusAndQuery(request)),
      tap(request => console.log(request))
    )
  }

  openSelected(id: number) {
    if (id) {
      this.OnSelectedId.emit(id.toString())
    }
  }

  submit(): void {
    if (!this.sortForm.getRawValue().searchQuery && this.sortForm.getRawValue().selectedStatus?.length === 0) {
      return this.subject.next({ page: "1", STATUS: null, searchQuery: null });
    }

    if (!this.sortForm.getRawValue().searchQuery) {
      return this.subject.next({ page: "1", STATUS: this.sortForm.getRawValue().selectedStatus, searchQuery: null });
    }

    if (this.sortForm.getRawValue().selectedStatus?.length === 0) {
      return this.subject.next({ page: "1", STATUS: null, searchQuery: this.sortForm.getRawValue().searchQuery });
    }
    this.subject.next({ page: "1", STATUS: this.sortForm.getRawValue().selectedStatus, searchQuery: this.sortForm.getRawValue().searchQuery });
  }
}
