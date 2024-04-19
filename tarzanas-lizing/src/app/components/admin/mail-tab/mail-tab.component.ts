import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-mail-tab',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './mail-tab.component.html',
  styleUrl: './mail-tab.component.scss',
})
export class MailTabComponent { }
