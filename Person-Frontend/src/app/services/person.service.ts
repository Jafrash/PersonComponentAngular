import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Person {
  id: number;
  name: string;
  age: number;
  address: string;
  role?: string;
}

@Injectable({ providedIn: 'root' })
export class PersonService {
  private peopleSubject = new BehaviorSubject<Person[]>([
    { id: 1, name: 'John Doe', age: 30, address: '123 Main St' },
    { id: 2, name: 'Jane Smith', age: 25, address: '456 Elm St' },
    { id: 3, name: 'Bob Johnson', age: 40, address: '789 Oak St' }
  ]);

  people$ = this.peopleSubject.asObservable();

  addPerson(person: Person) {
    const people = this.peopleSubject.value;
    this.peopleSubject.next([...people, person]);
  }

  removePerson(index: number) {
    const people = [...this.peopleSubject.value];
    people.splice(index, 1);
    this.peopleSubject.next(people);
  }
}
