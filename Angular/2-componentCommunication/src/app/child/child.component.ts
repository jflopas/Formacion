import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ComunicationServiceService } from '../comunication-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [ComunicationServiceService],
})
export class ChildComponent {
  @Input() message!: string;
  @Output() sendParent: EventEmitter<string> = new EventEmitter();

  text: string = 'Child Using Output Property';

  constructor(private comunicationServiceService: ComunicationServiceService) {}

  servChild() {
    this.sendParent.emit(this.comunicationServiceService.childService);
  }

  parentOut() {
    this.sendParent.emit(this.text);
  }

  obsChild() {
    this.comunicationServiceService.childObs.subscribe((text) =>
      this.sendParent.emit(text)
    );
  }
}
