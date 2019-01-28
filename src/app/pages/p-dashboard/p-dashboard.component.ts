import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-dashboard',
  templateUrl: './p-dashboard.component.html',
  styleUrls: ['./p-dashboard.component.sass']
})
export class PDashboardComponent implements OnInit {

  currentCategory : object = {};

  menuArray = [
    {
      id: 1,
      name : 'Menu 1',
      items: [
        {id: 1, name: 'Item 1', price: 50},
        {id: 2, name: 'Item 2', price: 70},
        {id: 3, name: 'Item 3', price: 60},
        {id: 4, name: 'Item 4', price: 5},
        {id: 5, name: 'Item 5', price: 7},
        {id: 6, name: 'Item 6', price: 17},
        {id: 7, name: 'Item 7', price: 23},
      ]
    },
    {
      id: 2,
      name : 'Menu 2',
      items: [
        {id: 1, name: 'Item 1', price: 71},
        {id: 2, name: 'Item 2', price: 55},
        {id: 3, name: 'Item 3', price: 6},
        {id: 4, name: 'Item 4', price: 52},
        {id: 5, name: 'Item 5', price: 18},
        {id: 6, name: 'Item 6', price: 27},
        {id: 7, name: 'Item 7', price: 33},
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
