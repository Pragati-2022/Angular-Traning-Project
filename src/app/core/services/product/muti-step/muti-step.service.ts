import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MutiStepService {
  currentForm = "account";
  constructor() { }
}
