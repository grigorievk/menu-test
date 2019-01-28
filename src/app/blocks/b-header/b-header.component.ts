import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-b-header',
  templateUrl: './b-header.component.html',
  styleUrls: ['./b-header.component.sass']
})
export class BHeaderComponent implements OnInit {
  @Input() menuTitle;

  constructor() { }

  ngOnInit() {
  }

}
