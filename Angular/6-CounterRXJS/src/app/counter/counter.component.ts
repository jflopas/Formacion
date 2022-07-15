import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, interval, merge, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements AfterViewInit {
  interval!: any;
  set: number = 0;
  count: number = this.set; // Screen Value;
  step: number = 2;
  mode: boolean = true; // True = Count Up; False = Count Down;
  edit: boolean = true; // True = Can edit count; False = Can´t edit count;
  disable: boolean = false; // True = Button Start Disabled; False = Button Start Enabled;

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

  constructor() {
    this.setToInput.valueChanges.subscribe((value) => (this.set = value));
    this.stepInput.valueChanges.subscribe((value) => (this.step = value));
  }
  ngAfterViewInit(): void {
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

    const exec = merge(
      this.startBtn$,
      this.pauseBtn$,
      this.resetBtn$,
      this.upBtn$,
      this.downBtn$
    ).subscribe((next) => {
      if (next === 'startBtn') {
        this.start();
      } else if (next === 'pauseBtn') {
        this.pause();
      } else if (next === 'resetBtn') {
        this.reset();
      } else if (next === 'upBtn') {
        this.countUp();
      } else if (next === 'downBtn') {
        this.countDown();
      }
    });
  }

  start() {
    if (!this.disable) {
      this.interval = interval(1000).subscribe(() => {
        this.counter(this.mode);
      });
      this.edit = false;
      this.disable = true;
    } else {
      return;
    }
  }

  pause() {
    setTimeout(() => {
      this.interval.unsubscribe();
    });
    this.disable = false;
    this.edit = false;
  }

  reset() {
    setTimeout(() => {
      this.interval.unsubscribe();
    });
    this.count = 0;
    this.disable = false;
    this.edit = true;
  }

  counter(mode: boolean) {
    if (mode) {
      this.count += this.step;
    } else {
      this.count -= this.step;
    }
  }

  countUp() {
    this.mode = true;
  }

  countDown() {
    this.mode = false;
  }

  setTo() {
    if (this.edit) {
      this.count = this.set;
    } else {
      return;
    }
  }
}
