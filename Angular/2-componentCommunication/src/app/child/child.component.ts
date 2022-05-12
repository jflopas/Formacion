import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ComunicationServiceService } from '../comunication-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  providers: [ComunicationServiceService],
})
export class ChildComponent implements OnInit {
  constructor(private comunicationServiceService: ComunicationServiceService) {}

  servChild() {
    this.sendParent.emit(this.comunicationServiceService.childServ());
  }

  @Input() message!: string;
  @Output() sendParent: EventEmitter<string> = new EventEmitter();
  text: string = 'Child Using Output Property';

  parentOut() {
    this.sendParent.emit(this.text);
  }

  ngOnInit() {
    this.comunicationServiceService.child$.subscribe((text) => {
      this.sendParent.emit(text);
    });
  }
  obsChild() {
    this.comunicationServiceService.child$.emit('Child Using Observable');
  }
}
