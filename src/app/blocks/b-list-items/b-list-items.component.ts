import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-b-list-items',
  templateUrl: './b-list-items.component.html',
  styleUrls: ['./b-list-items.component.sass']
})
export class BListItemsComponent implements OnInit {
  @Input() listItems;
  @Input() items;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
