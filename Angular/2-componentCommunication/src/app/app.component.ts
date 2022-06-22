import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ComunicationServiceService } from './comunication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ComunicationServiceService],
})
export class AppComponent {
  title = 'Component Communication';
  messageChild!: string;
  messageParent!: string;

  constructor(private comunicationServiceService: ComunicationServiceService) {}

  servParent() {
    this.messageChild = this.comunicationServiceService.parentService;
  }

  inputChild() {
    return (this.messageChild = 'Parent Using Input Property');
  }

  parentOutput(text: string) {
    this.messageParent = text;
  }

  obsParent() {
    this.comunicationServiceService.parentObs.subscribe(
      (text) => (this.messageChild = text)
    );
  }
}
