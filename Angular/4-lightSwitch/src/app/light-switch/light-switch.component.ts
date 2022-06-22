import { Component } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.css'],
})
export class LightSwitchComponent {
  on: boolean = false;
  color: string = 'red';
  colors = ['red', 'yellow', 'green'];

  turnOn(event: any) {
    if (event.target.checked) {
      this.on = true;
    } else {
      this.on = false;
    }
  }

  chosenColor(event: any) {
    this.color = event.target.value;
  }
}
