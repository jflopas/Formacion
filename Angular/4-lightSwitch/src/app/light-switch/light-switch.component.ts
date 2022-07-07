import { Component } from '@angular/core';

@Component({
  selector: 'app-light-switch',
  templateUrl: './light-switch.component.html',
  styleUrls: ['./light-switch.component.scss'],
})
export class LightSwitchComponent {
  title = 'light switch - jafp';
  on: boolean = false;
  color: string = 'red';

  turnLightSwitch(value: boolean) {
    this.on = value;
  }

  colorLight(color: string) {
    this.color = color;
  }
}
