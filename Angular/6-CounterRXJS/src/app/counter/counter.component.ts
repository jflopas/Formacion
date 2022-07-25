import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  EMPTY,
  fromEvent,
  iif,
  interval,
  merge,
  Observable,
  Subscription,
} from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import { __values } from 'tslib';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  set: number = 0;
  count: number = 0; // Screen Value;
  step: number = 2;
  up: boolean = true;

  @ViewChild('startBtn', { static: true })
  startBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('pauseBtn', { static: true })
  pauseBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('resetBtn', { static: true })
  resetBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('upBtn', { static: true })
  upBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('downBtn', { static: true })
  downBtn!: ElementRef<HTMLButtonElement>;

  startBtn$!: Observable<string>;
  pauseBtn$!: Observable<string>;
  resetBtn$!: Observable<string>;
  upBtn$!: Observable<string>;
  downBtn$!: Observable<string>;
  setToInput = new FormControl();
  stepInput = new FormControl();
  watch$!: Observable<number>;

  constructor() {
    this.setToInput.valueChanges.subscribe((value) => (this.set = value));
    this.stepInput.valueChanges.subscribe((value) => (this.step = value));
  }

  interactionSubsc!: Subscription;

  ngOnInit(): void {
    this.startBtn$ = fromEvent<MouseEvent>(
      this.startBtn.nativeElement,
      'click'
    ).pipe(map(() => 'startBtn'));
    this.pauseBtn$ = fromEvent<MouseEvent>(
      this.pauseBtn.nativeElement,
      'click'
    ).pipe(map(() => 'pauseBtn'));
    this.resetBtn$ = fromEvent<MouseEvent>(
      this.resetBtn.nativeElement,
      'click'
    ).pipe(map(() => 'resetBtn'));
    this.upBtn$ = fromEvent<MouseEvent>(this.upBtn.nativeElement, 'click').pipe(
      map(() => 'upBtn')
    );
    this.downBtn$ = fromEvent<MouseEvent>(
      this.downBtn.nativeElement,
      'click'
    ).pipe(map(() => 'downBtn'));

    this.interactionSubsc = merge(
      this.resetBtn$,
      this.upBtn$,
      this.downBtn$
    ).subscribe((next) => {
      if (next === 'resetBtn') {
        this.reset();
      } else if (next === 'upBtn') {
        this.countUp();
      } else if (next === 'downBtn') {
        this.countDown();
      }
    });

    const isCounting$ = merge(this.startBtn$, this.pauseBtn$).pipe(
      map((btnName) => btnName === 'startBtn')
    );

    this.watch$ = isCounting$.pipe(
      switchMap((isCounting) =>
        iif(
          () => isCounting,
          interval(1000).pipe(
            map(() =>
              this.up ? (this.count += this.step) : (this.count -= this.step)
            ),
            tap((x) => console.log(x))
          ),
          EMPTY
        )
      ),
      startWith(this.count)
    );
  }

  ngOnDestroy(): void {
    this.interactionSubsc?.unsubscribe();
  }

  reset() {
    this.count = 0;
    this.up ? (this.count -= this.step) : (this.count += this.step);
  }

  countUp() {
    this.up = true;
  }

  countDown() {
    this.up = false;
  }

  setTo() {
    this.count = this.set;
  }
}
