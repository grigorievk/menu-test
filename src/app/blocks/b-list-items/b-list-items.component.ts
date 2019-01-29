import { Component, OnInit, Input } from '@angular/core';
import { CountService } from '../../count.service';
/*import construct = Reflect.construct;
import {logging} from 'selenium-webdriver';*/

@Component({
  selector: 'app-b-list-items',
  templateUrl: './b-list-items.component.html',
  styleUrls: ['./b-list-items.component.sass']
})
export class BListItemsComponent implements OnInit {
  @Input() listItems;

  constructor(private countService: CountService) {}

  toggleItem(item) {
    console.log(item);
    item = Object.assign({}, item);

    if (item.checked) {
      this.countService.addItem(item);
    } else {
      this.countService.removeItem(item);
    }
  }

  ngOnInit() {}

}
