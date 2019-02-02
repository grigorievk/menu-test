import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../store/reducers';

import { MOCKMENU, MOCKITEMS } from '../../mock/mock-data';
import { Item } from '../../models/item';

@Component({
  selector: 'app-p-dashboard',
  templateUrl: './p-dashboard.component.html',
  styleUrls: ['./p-dashboard.component.sass']
})
export class PDashboardComponent implements OnInit {
    selectedItems$: Observable<Item[]>;
    selectedIds;

    mockMenu = MOCKMENU;
    mockItems = MOCKITEMS;

    isLoaded = {};
    menuTitle: string;
    listItems: object;
    categoryId: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private store: Store<fromRoot.State>
    ) {
        this.selectedItems$ = store.select(fromRoot.getSelected);

        this.selectedIds = [];
        // Subscribe on State
        this.selectedItems$.subscribe((items) => {
            this.selectedIds = items.map(item => item.id);
        });
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            // Get current category from Route
            this.categoryId = parseInt(params.get('id')) || 1;
            this.listItems = [];
            this.menuTitle = this.mockMenu.filter((obj) => {
                return obj.id === this.categoryId;
            })[0].name;
            this.isLoaded[this.categoryId] = this.isLoaded[this.categoryId] || false;

            this.getItems()
                .then((items) => {
                    // Get items from MOCK
                    this.listItems = this.prepare(items);
                })
                .catch(() => {
                    this.router.navigate(['/404']);
                });
        });
    }

    getItems() {
      return new Promise((resolve, reject) => {
          if (this.mockItems[this.categoryId]) {
              const delay = this.isLoaded[this.categoryId] ? 0 : 3000;
              setTimeout(() => {
                  // Clone items objects for immutable
                  const items = this.mockItems[this.categoryId].items.slice().map(item => Object.assign({}, item));
                  resolve(items);
                  this.isLoaded[this.categoryId] = true;
              }, delay);

              return;
          }

          reject();
      });
    }

    prepare(items) {
        return items.map((item) => {
            // Set checked from State
            item.checked = this.selectedIds.indexOf(item.id) !== -1;

            return item;
        });
    }

}
