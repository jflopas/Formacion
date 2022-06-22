import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComunicationServiceService {
  private _parentText: string = 'Parent Using Service';
  private _childText: string = 'Child Using Service';
  private _parentSub$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Parent Using Subject'
  );
  private _childSub$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Child Using Subject'
  );

  // Service
  get parentService() {
    return this._parentText;
  }

  get childService() {
    return this._childText;
  }

  // Observable
  get parentObs() {
    return this._parentSub$.asObservable();
  }

  get childObs() {
    return this._childSub$.asObservable();
  }
}
