import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  filter,
  fromEvent,
  map,
  merge,
  of,
  Subscription,
  switchMap,
  timer,
} from 'rxjs';

@Directive({
  selector: '[appLongPress]',
})
export class LongPressDirective implements OnInit {
  private timerSub!: Subscription;

  @Input() delay = 1000;

  @Output() readonly longPressed: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const isTouch = 'ontouchstart' in document.documentElement;
    const element = this.elementRef.nativeElement;
    element.onpointerdown = (ev) => {
      this.timerSub = timer(this.delay).subscribe(() => {
        this.longPressed.emit(ev);
      });
    };

    element.onpointerup = () => {
      this.unsub();
    };

    element.onpointercancel = () => {
      this.unsub();
    };

    if (isTouch) {
      element.onpointerleave = () => {
        this.unsub();
      };

      element.ontouchmove = () => {
        this.unsub();
      };
    } else {
      element.onpointermove = () => {
        this.unsub();
      };
    }
  }

  private unsub() {
    if (this.timerSub && !this.timerSub.closed) {
      this.timerSub.unsubscribe();
    }
  }
}
