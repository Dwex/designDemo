import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
