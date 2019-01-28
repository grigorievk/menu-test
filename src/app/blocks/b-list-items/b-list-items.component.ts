import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-b-list-items',
  templateUrl: './b-list-items.component.html',
  styleUrls: ['./b-list-items.component.sass']
})
export class BListItemsComponent implements OnInit {
  @Input() listItems;

  items:object;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const currentId = parseInt(params.get('id')) || 1;
      const currentCategory = this.listItems.filter(obj => {
        return obj.id === currentId;
      });

      this.items = currentCategory[0].items;
    });
  }

}
