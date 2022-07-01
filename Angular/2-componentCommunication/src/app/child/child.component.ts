import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { ComunicationServiceService } from '../comunication-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() message!: string;
  @Output() sendParent: EventEmitter<string> = new EventEmitter();

  text: string = 'Child Using Output Property';

  constructor(private comunicationService: ComunicationServiceService) {}
  ngOnInit(): void {
    this.comunicationService.parentTxt.subscribe((txt) => (this.message = txt));

    this.comunicationService
      .getChildObs()
      .subscribe((txt) => (this.message = txt));
  }

  servChild() {
    this.comunicationService.sendChildService('Child Using Service');
  }

  parentOut() {
    this.sendParent.emit(this.text);
  }

  obsChild() {
    this.comunicationService.sendParentObs('Child Using Subject');
  }
}
