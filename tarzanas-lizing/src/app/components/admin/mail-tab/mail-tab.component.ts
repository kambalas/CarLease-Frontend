import { Component, OnInit, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatOption } from "@angular/material/autocomplete";
import { MatSelect } from "@angular/material/select";
import { PersonalInfoDetails } from '../../../types';

@Component({
  selector: 'app-mail-tab',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, FormsModule, MatFormField, MatLabel, MatOption, MatSelect, ReactiveFormsModule],
  templateUrl: './mail-tab.component.html',
  styleUrl: './mail-tab.component.scss',
})
export class MailTabComponent implements OnInit {
  dataForEmailTab = input<PersonalInfoDetails>();
  selectedTemplate: string = '';

  ngOnInit(): void {
    console.log(this.dataForEmailTab()?.email);
  }
}
