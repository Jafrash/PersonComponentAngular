import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonService, Person } from '../../services/person.service';

@Component({
  selector: 'app-add-person',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-person.html',
  styleUrl: './add-person.css',
})
export class AddPersonComponent {
  personToAdd = {
    id: '',
    name: '',
    age: '',
    address: ''
  };

  constructor(private personService: PersonService) {}

  addPerson(): void {
    const person: Person = {
      ...this.personToAdd,
      id: this.personToAdd.id ? Number(this.personToAdd.id) : Date.now(),
      age: Number(this.personToAdd.age)
    };
    this.personService.addPerson(person);
    this.personToAdd = {
      id: '',
      name: '',
      age: '',
      address: ''
    };
  }
}
