import { EventEmitter } from '@angular/core';
import { Person } from '../person.model';

export class OutputService {
    personChanged = new EventEmitter<Person[]>();

    private persons: Person[] = [
        // new Person('suajy', new Date('1992-10-28')),
        // new Person('Sahil', new Date('1996-01-27'))
    ];

    getPersons() {
        return this.persons;
    }

    addPerson(person: Person) {
        this.persons.push(person);
        this.personChanged.emit(this.persons);
    }

    addPersons(persons : Person[]) {
        this.persons.push(...persons);
        this.personChanged.emit(this.persons);
    }
}