import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ComunicationServiceService {
  parentText: string = 'Parent Using Service';
  childText: string = 'Child Using Service';

  parentServ() {
    return this.parentText;
  }
  childServ() {
    return this.childText;
  }

  parent$ = new EventEmitter<string>();
  child$ = new EventEmitter<string>();
}
