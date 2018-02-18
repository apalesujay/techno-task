import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { InputService } from './input.service';

@Component({
  selector: 'app-get-input',
  templateUrl: './get-input.component.html',
  styleUrls: ['./get-input.component.css'],
  providers: [InputService]
})
export class GetInputComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('dobInput') dobInputRef: ElementRef;

  constructor(private inputService: InputService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.inputService.getInput(
      this.nameInputRef.nativeElement.value,
      this.dobInputRef.nativeElement.value
    );
    this.nameInputRef.nativeElement.value='';
    this.dobInputRef.nativeElement.value='';
  }
}
