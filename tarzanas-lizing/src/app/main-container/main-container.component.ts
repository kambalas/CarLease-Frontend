import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';



@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [RouterOutlet,HowItWorksComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss'
})
export class MainContainerComponent {

}
