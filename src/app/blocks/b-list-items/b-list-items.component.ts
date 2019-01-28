import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-b-list-items',
  templateUrl: './b-list-items.component.html',
  styleUrls: ['./b-list-items.component.sass']
})
export class BListItemsComponent implements OnInit {
  @Input() listItems;

  constructor() {
  }

  ngOnInit() {

  }

}
