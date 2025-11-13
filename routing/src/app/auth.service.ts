import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  counter = 0;

  constructor() {}

  increment() {
    this.counter++;
    console.log('Counter:', this.counter);
  }
}
