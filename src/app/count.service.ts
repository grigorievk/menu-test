import { EventEmitter, Output } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  @Output() change: EventEmitter<any> = new EventEmitter();
  selectedItems: {id: number, name: string, category: number, price: number, checked: boolean}[] = [];

  addItem(item) {
    this.selectedItems.push(item);

    this.change.emit();
  }

  removeItem(item) {
    this.selectedItems = this.selectedItems.filter(filterItem => filterItem.id !== item.id);

    this.change.emit();
  }

  getCount() {
    return this.selectedItems.length;
  }

  getPrice() {
    if (this.selectedItems.length) {
        return this.selectedItems.reduce((acc, curValue) => acc + curValue.price, 0);
    } else {
      return 0;
    }
  }

  constructor() { }
}
