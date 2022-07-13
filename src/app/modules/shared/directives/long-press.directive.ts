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
  //long press code of medium

  // private eventSubscribe: Subscription;
  // threshold = 500;

  // @Output()
  // mouseLongPress = new EventEmitter();

  // constructor(private elementRef: ElementRef) {
  //   const mousedown = fromEvent<MouseEvent>(
  //     elementRef.nativeElement,
  //     'mousedown'
  //   ).pipe(
  //     filter((event) => event.button == 0), // Only allow left button (Primary button)
  //     map((event) => true) // turn on threshold counter
  //   );
  //   const touchstart = fromEvent(elementRef.nativeElement, 'touchstart').pipe(
  //     map(() => true)
  //   );
  //   const touchEnd = fromEvent(elementRef.nativeElement, 'touchend').pipe(
  //     map(() => false)
  //   );
  //   const mouseup = fromEvent<MouseEvent>(window, 'mouseup').pipe(
  //     filter((event) => event.button == 0), // Only allow left button (Primary button)
  //     map(() => false) // reset threshold counter
  //   );
  //   this.eventSubscribe = merge(mousedown, mouseup, touchstart, touchEnd)
  //     .pipe(
  //       switchMap((state) => (state ? timer(this.threshold, 100) : of(null))),
  //       filter((value: any) => value)
  //     )
  //     .subscribe(() => this.mouseLongPress.emit());
  // }

  // ngOnDestroy(): void {
  //   if (this.eventSubscribe) {
  //     this.eventSubscribe.unsubscribe();
  //   }
  // }

  //long press code of Ravi Sir
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
