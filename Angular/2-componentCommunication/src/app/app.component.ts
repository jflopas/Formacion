import { Component, OnInit, Output } from '@angular/core';

import { ComunicationServiceService } from './comunication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Component Communication';

  messageParent!: string;
  @Output() messageChild!: string;

  constructor(private comunicationService: ComunicationServiceService) {}

  ngOnInit(): void {
    this.comunicationService.childTxt.subscribe(
      (txt) => (this.messageParent = txt)
    );

    this.comunicationService
      .getParentObs()
      .subscribe((txt) => (this.messageParent = txt));
  }

  servParent() {
    this.comunicationService.sendParentService('Parent Using Service');
  }

  inputChild() {
    this.messageChild = 'Parent Using Input Property';
    console.log(this.messageChild);
  }

  parentOutput(text: string) {
    this.messageParent = text;
  }

  obsParent() {
    this.comunicationService.sendChildObs('Parent Using Subject');
  }
}
