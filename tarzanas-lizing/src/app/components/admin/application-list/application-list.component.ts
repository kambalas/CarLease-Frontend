import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { of } from 'rxjs';

@Component({
  selector: 'app-application-list',
  standalone: true,
  imports: [MatCardModule, MatDividerModule, MatButtonModule, MatFormField, MatInput, AsyncPipe],
  templateUrl: './application-list.component.html',
  styleUrl: './application-list.component.scss'
})
export class ApplicationListComponent {
  listResponse$ = of([
    {
      id: 1,
      firstName: "Bob",
      lastName: "Bobber",
      date: new Date(),
      status: "pending"
    },
    {
      id: 2,
      firstName: "Rob",
      lastName: "Robber",
      date: new Date(),
      status: "accepted"
    },
    {
      id: 3,
      firstName: "Ben",
      lastName: "Benner",
      date: new Date(),
      status: "declined"
    },
    {
      id: 4,
      firstName: "Todd",
      lastName: "Todder",
      date: new Date(),
      status: "pending"
    },
    {
      id: 5,
      firstName: "Rod",
      lastName: "Rodder",
      date: new Date(),
      status: "declined"
    },
    {
      id: 6,
      firstName: "Bob",
      lastName: "Bobber",
      date: new Date(),
      status: "pending"
    },
    {
      id: 7,
      firstName: "Rob",
      lastName: "Robber",
      date: new Date(),
      status: "accepted"
    },
    {
      id: 8,
      firstName: "Ben",
      lastName: "Benner",
      date: new Date(),
      status: "declined"
    },
    {
      id: 9,
      firstName: "Todd",
      lastName: "Todder",
      date: new Date(),
      status: "pending"
    },
    {
      id: 10,
      firstName: "Rod",
      lastName: "Rodder",
      date: new Date(),
      status: "declined"
    }
  ]);
}
