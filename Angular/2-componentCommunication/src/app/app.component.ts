import { Component, OnInit } from '@angular/core';
import { ComunicationServiceService } from './comunication-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ComunicationServiceService],
})
export class AppComponent implements OnInit {
  title = 'Component Communication';
  messageChild!: string;
  messageParent!: string;

  constructor(private comunicationServiceService: ComunicationServiceService) {}

  servParent() {
    this.messageChild = this.comunicationServiceService.parentServ();
  }

  inputChild() {
    return (this.messageChild = 'Parent Using Input Property');
  }

  parentOutput(text: string) {
    this.messageParent = text;
  }

  ngOnInit() {
    this.comunicationServiceService.parent$.subscribe((text) => {
      this.messageChild = text;
    });
  }

  obsParent() {
    this.comunicationServiceService.parent$.emit('Parent Using Observable');
  }
}
