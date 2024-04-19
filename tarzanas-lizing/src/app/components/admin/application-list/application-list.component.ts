import { AsyncPipe } from '@angular/common';
import { Component, OnInit, inject, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Observable, of } from 'rxjs';
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
  OnSelectedId = output<string>();


  //listResponse$: Observable<Application[]> | undefined;

  listResponse$ = of([
    {
      id: "123",
      firstName: "Bob",
      secondName: "Bobber",
      isOpened: false,
      dateSubmitted: new Date(),
      dateUpdated: new Date(),
      status: "accepted",
    },
    {
      id: "124",
      firstName: "Rob",
      secondName: "Robber",
      isOpened: true,
      dateSubmitted: new Date(),
      dateUpdated: new Date(),
      status: "pending",
    },
    {
      id: "125",
      firstName: "Bob",
      secondName: "Bobber",
      isOpened: true,
      dateSubmitted: new Date(),
      dateUpdated: new Date(),
      status: "rejected",
    },
  ]);


  ngOnInit(): void {
    //this.listResponse$ = this.service.getAllApplications();
  }

  openSelected(id: string) {
    if (id) {
      this.OnSelectedId.emit(id)
    }
  }
}
