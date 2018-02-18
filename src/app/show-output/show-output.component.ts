import { Component, OnInit } from '@angular/core';
import { Person } from '../person.model';
import { OutputService } from './output.service';

@Component({
  selector: 'app-show-output',
  templateUrl: './show-output.component.html',
  styleUrls: ['./show-output.component.css']
})
export class ShowOutputComponent implements OnInit {
  persons: Person[];

  constructor(private outputService: OutputService) { }

  ngOnInit() {
    this.persons = this.outputService.getPersons();
    this.outputService.personChanged.subscribe(
      (persons: Person[]) => {
        this.persons = persons;
      }
    );
  }

  onDelete(i: number) {
    this.persons.splice(i,1);
  }

}
