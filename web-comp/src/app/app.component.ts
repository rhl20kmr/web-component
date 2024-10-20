import { Component } from '@angular/core';
import { WebComp1Component } from './web-comp1/web-comp1.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[WebComp1Component],
  standalone: true
})
export class AppComponent {
  title = 'web-comp';
}
