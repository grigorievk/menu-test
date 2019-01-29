import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CountService } from '../../count.service';
import { MOCKMENU, MOCKITEMS } from '../../mock/mock-data';

@Component({
  selector: 'app-p-dashboard',
  templateUrl: './p-dashboard.component.html',
  styleUrls: ['./p-dashboard.component.sass']
})
export class PDashboardComponent implements OnInit {
    mockMenu = MOCKMENU;
    mockItems = MOCKITEMS;

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
            this.menuTitle = this.mockMenu.filter((obj) => {
                return obj.id === this.categoryId;
            })[0].name;

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
