import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private favouriteTotal = new BehaviorSubject<any>(0);
  favouriteTotal$ = this.favouriteTotal.asObservable();
  
  constructor() { }

  getfavouriteTotal(): Observable<any> {
    return this.favouriteTotal$;
  }
}
