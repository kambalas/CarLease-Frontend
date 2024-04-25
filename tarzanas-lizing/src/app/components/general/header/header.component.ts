import { Component } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatOption, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatSelectModule, MatOptionModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selected = "united-kingdom"

}
