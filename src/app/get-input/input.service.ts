import { EventEmitter, Injectable } from "@angular/core";
import { Person } from "../person.model";
import { OutputService } from "../show-output/output.service";

@Injectable()
export class InputService {
    constructor(private outputService: OutputService) { }

    getInput(name: string, dob: Date) {
       const personName = name;
       const personDOB = dob;
       const newPerson = new Person(personName, personDOB);
       this.outputService.addPerson(newPerson);
    }

}