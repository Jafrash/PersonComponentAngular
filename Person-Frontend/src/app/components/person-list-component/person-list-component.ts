import { Component } from '@angular/core';
import { PersonComponent } from '../person-component/person-component';
import { AddPersonComponent } from '../add-person/add-person';
import { PersonService, Person } from '../../services/person.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-list-component',
  imports: [CommonModule, PersonComponent, AddPersonComponent],
  templateUrl: './person-list-component.html',
  styleUrl: './person-list-component.css',
})
export class PersonListComponent {
  people$: Observable<Person[]>;

  constructor(private personService: PersonService) {
    this.people$ = this.personService.people$;
  }

  trackById(index: number, person: Person) {
    return person.id;
  }

  removePerson(index: number) {
    this.personService.removePerson(index);
  }

  onPersonAdded(person: Person) {
    person.id = person.id || Date.now();
    person.age = Number(person.age);
    this.personService.addPerson(person);
  }
}
