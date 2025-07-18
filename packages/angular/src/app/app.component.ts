import { Component } from '@angular/core';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ButtonComponent]
})
export class AppComponent {
  title = 'angular-app';

  onPrimaryClick() {
    alert('Primary button clicked!');
  }

  onSecondaryClick() {
    alert('Secondary button clicked!');
  }
}
