import { Component } from '@angular/core';

@Component({
  selector: 'app-semaphore',
  templateUrl: './semaphore.component.html',
  styleUrls: ['./semaphore.component.css'],
})
export class SemaphoreComponent {
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
