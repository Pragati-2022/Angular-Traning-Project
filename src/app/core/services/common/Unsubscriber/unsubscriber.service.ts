import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsubscriberService implements OnDestroy {
  private readonly _destroy$ = new Subject<void>();
  public readonly destroy$ = this._destroy$.asObservable();
  public ngOnDestroy(): void {
    this._destroy$.next();
    console.log('unsubcribed!');
  // let sub =  this._destroy$.subscribe();

    // this._destroy$.complete();
    this._destroy$.unsubscribe();
    console.log(this._destroy$.closed);
  }
}
