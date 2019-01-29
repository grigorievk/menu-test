import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountService } from '../../count.service';

@Component({
  selector: 'app-p-dashboard',
  templateUrl: './p-dashboard.component.html',
  styleUrls: ['./p-dashboard.component.sass']
})
export class PDashboardComponent implements OnInit {
    menuArray = [
        {
            id: 1,
            name : 'Menu 1'
        },
        {
            id: 2,
            name : 'Menu 2'
        }
    ];
    mockItems = {
      1: {
          items: [
              {id: 1, name: 'Item 1', category: 1, price: 50},
              {id: 2, name: 'Item 2', category: 1, price: 70},
              {id: 3, name: 'Item 3', category: 1, price: 60},
              {id: 4, name: 'Item 4', category: 1, price: 5},
              {id: 5, name: 'Item 5', category: 1, price: 7},
              {id: 6, name: 'Item 6', category: 1, price: 17},
              {id: 7, name: 'Item 7', category: 1, price: 23},
          ]
      },
      2: {
          items: [
              {id: 8, name: 'Item 1', category: 2, price: 71},
              {id: 9, name: 'Item 2', category: 2, price: 55},
              {id: 10, name: 'Item 3', category: 2, price: 6},
              {id: 11, name: 'Item 4', category: 2, price: 52},
              {id: 12, name: 'Item 5', category: 2, price: 18},
              {id: 13, name: 'Item 6', category: 2, price: 27},
              {id: 14, name: 'Item 7', category: 2, price: 33},
          ]
      }
    };

    menuTitle: string;
    listItems: object;
    categoryId: number;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private countService: CountService
  ) {}

  ngOnInit() {
     this.route.paramMap.subscribe(params => {
        this.categoryId = parseInt(params.get('id')) || 1;
        this.menuTitle = this.menuArray.filter((obj) => {
            return obj.id === this.categoryId;
        })[0].name;
        console.log('route', params);

        this.getItems()
            .then((items) => {
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
              resolve(this.mockItems[this.categoryId].items);
              return;
          }

          reject();
      });
  }

  prepare(items) {
    return items.map((item) => {
        item.checked = this.countService.selectedItems.find(item2 => item2.id === item.id);

        return item;
    });
  }

}
