import { EventEmitter, Output } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  @Output() change: EventEmitter<any> = new EventEmitter();

  totalCount: number = 0;
  totalPrice: number = 0;

  addItem(price: number) {
    const emitData = {
      count:  ++this.totalCount,
      price:  this.totalPrice += price
    };

    this.change.emit(emitData);
  }
  removeItem(price: number) {
    const emitData = {
      count:  --this.totalCount,
      price:  this.totalPrice -= price
    };

    this.change.emit(emitData);
  }

  constructor() { }
}
