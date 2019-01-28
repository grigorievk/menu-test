import { Component, OnInit, Input } from '@angular/core';
import { CountService } from '../../count.service';

@Component({
  selector: 'app-b-header',
  templateUrl: './b-header.component.html',
  styleUrls: ['./b-header.component.sass']
})
export class BHeaderComponent implements OnInit {
  @Input() menuTitle;
  totalCount: number = 0;
  totalPrice: number = 0;

  constructor(private countService: CountService) {}

  ngOnInit() {
    this.countService.change.subscribe(emitData => {
      this.totalCount = emitData.count;
      this.totalPrice = emitData.price;
    });
  }
}
