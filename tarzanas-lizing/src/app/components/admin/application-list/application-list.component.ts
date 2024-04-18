import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Observable } from 'rxjs';
import { ApplicationListService } from '../../../services/application-list.service';
import { Application } from '../../../types';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatFormField, MatInput, AsyncPipe],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.scss'
})
export class ApplicationListComponent implements OnInit {
  private service = inject(ApplicationListService);

  listResponse$: Observable<Application[]> | undefined;

  ngOnInit(): void {
    this.listResponse$ = this.service.getAllApplications();
  }
}
