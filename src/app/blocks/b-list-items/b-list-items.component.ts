import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';
import * as itemAction from '../../store/actions/items';

import construct = Reflect.construct;
import {logging} from 'selenium-webdriver';

@Component({
  selector: 'app-b-list-items',
  templateUrl: './b-list-items.component.html',
  styleUrls: ['./b-list-items.component.sass']
})

export class BListItemsComponent implements OnInit {
  @Input() listItems;

  constructor(private store: Store<fromRoot.State>) {
  }

  toggleItem(item) {
    item = Object.assign({}, item);

    // Dispatch State Event
    if (item.checked) {
      this.store.dispatch(new itemAction.AddItem(item));
    } else {
      this.store.dispatch(new itemAction.RemoveItem(item));
    }
  }

  ngOnInit() {}

}
