import { Component } from '@angular/core';
import { PersonListComponent } from './components/person-list-component/person-list-component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PersonListComponent],
  template: `<app-person-list-component></app-person-list-component>`
})
export class AppComponent {}