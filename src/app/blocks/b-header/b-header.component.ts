import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';

@Component({
  selector: 'app-b-header',
  templateUrl: './b-header.component.html',
  styleUrls: ['./b-header.component.sass']
})
export class BHeaderComponent implements OnInit {
  @Input() menuTitle;
  totalCount$: Observable<any>;
  totalPrice$: Observable<any>;

  constructor(private store: Store<fromRoot.State>) {
    // Get variable by State Selector
    this.totalCount$ = store.select(fromRoot.getTotalCount);
    this.totalPrice$ = store.select(fromRoot.getTotalPrice);
  }

  ngOnInit() {
  }
}
