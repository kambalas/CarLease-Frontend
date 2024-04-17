import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-single-application-view',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './single-application-view.component.html',
  styleUrl: './single-application-view.component.scss'
})
export class SingleApplicationViewComponent {

}
