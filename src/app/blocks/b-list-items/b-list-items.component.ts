import { Component, OnInit, Input } from '@angular/core';
import { CountService } from '../../count.service';
import construct = Reflect.construct;

@Component({
  selector: 'app-b-list-items',
  templateUrl: './b-list-items.component.html',
  styleUrls: ['./b-list-items.component.sass']
})
export class BListItemsComponent implements OnInit {
  @Input() listItems;

  constructor(private countService: CountService) {}

  toggleItem(item) {
    item.checked = !item.checked;
    if (item.checked) {
      this.countService.addItem(item.price);
    } else {
      this.countService.removeItem(item.price);
    }
  }

  ngOnInit() {}

}
