import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Display/Hide';
  show: boolean = false;

  disableBox() {
    this.show = !this.show;
  }
}
