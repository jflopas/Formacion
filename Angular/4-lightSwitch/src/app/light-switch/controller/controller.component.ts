import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss'],
})
export class ControllerComponent {
  @Output() on: EventEmitter<boolean> = new EventEmitter();
  @Output() color: EventEmitter<string> = new EventEmitter();
  bold: boolean = false;

  colors = ['red', 'yellow', 'green'];

  turnOn(event: any) {
    if (event.target.checked) {
      this.on.emit(true);
      this.bold = true;
    } else {
      this.on.emit(false);
      this.bold = false;
    }
  }

  chosenColor(event: any) {
    this.color.emit(event.target.value);
  }
}
