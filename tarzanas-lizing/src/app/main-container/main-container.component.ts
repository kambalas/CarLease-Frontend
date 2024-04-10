import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HowItWorksComponent, CarLeasingCalculatorComponent } from '../how-it-works/how-it-works.component';
import { CarLeasingCalculatorComponent } from "../components/car-leasing-calculator/car-leasing-calculator.component";



@Component({
  selector: 'app-main-container',
  standalone: true,
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
  imports: [RouterOutlet, HowItWorksComponent, CarLeasingCalculatorComponent]
})
export class MainContainerComponent {

}
