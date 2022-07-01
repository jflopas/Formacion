import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComunicationServiceService {
  parentTxt: EventEmitter<string> = new EventEmitter<string>();
  childTxt: EventEmitter<string> = new EventEmitter<string>();
  parentSub: Subject<string> = new Subject<string>();
  childSub: Subject<string> = new Subject<string>();

  // Service
  sendParentService(txt: string) {
    this.parentTxt.emit(txt);
  }

  sendChildService(txt: string) {
    this.childTxt.emit(txt);
  }

  // Observable
  sendParentObs(txt: string) {
    this.parentSub.next(txt);
  }

  sendChildObs(txt: string) {
    this.childSub.next(txt);
  }

  getParentObs() {
    return this.parentSub.asObservable();
  }

  getChildObs() {
    return this.childSub.asObservable();
  }
}
