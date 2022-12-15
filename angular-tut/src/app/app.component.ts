import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-tut';

  successMsg = false;

  contacts = [
    { firstName: 'ARC', lastName: 'tutorials', contactID: 1234 },
    { firstName: 'Mark', lastName: 'Hendar', contactID: 1235 },
    { firstName: 'Simth', lastName: 'Kim', contactID: 1236 },
  ];

  superPower = 'wonderWoman';
}
