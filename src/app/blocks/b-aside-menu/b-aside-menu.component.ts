import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-b-aside-menu',
  templateUrl: './b-aside-menu.component.html',
  styleUrls: ['./b-aside-menu.component.sass']
})
export class BAsideMenuComponent implements OnInit {
  @Input() menuItems;
  @Input() categoryId;

  constructor() { }

  ngOnInit() {
  }

}
