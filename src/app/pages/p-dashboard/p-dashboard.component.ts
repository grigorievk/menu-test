import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-p-dashboard',
  templateUrl: './p-dashboard.component.html',
  styleUrls: ['./p-dashboard.component.sass']
})
export class PDashboardComponent implements OnInit {

  menuArray = [
    {
      id: 1,
      name : 'Menu 1',
      items: [
        {id: 1, name: 'Item 1', price: 50, checked: false},
        {id: 2, name: 'Item 2', price: 70, checked: false},
        {id: 3, name: 'Item 3', price: 60, checked: false},
        {id: 4, name: 'Item 4', price: 5, checked: false},
        {id: 5, name: 'Item 5', price: 7, checked: false},
        {id: 6, name: 'Item 6', price: 17, checked: false},
        {id: 7, name: 'Item 7', price: 23, checked: false},
      ]
    },
    {
      id: 2,
      name : 'Menu 2',
      items: [
        {id: 1, name: 'Item 1', price: 71, checked: false},
        {id: 2, name: 'Item 2', price: 55, checked: false},
        {id: 3, name: 'Item 3', price: 6, checked: false},
        {id: 4, name: 'Item 4', price: 52, checked: false},
        {id: 5, name: 'Item 5', price: 18, checked: false},
        {id: 6, name: 'Item 6', price: 27, checked: false},
        {id: 7, name: 'Item 7', price: 33, checked: false},
      ]
    }
  ];

  menuTitle: string;
  listItems: object;
  categoryId: number;

  constructor(
      private router: Router,
      private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const currentId = parseInt(params.get('id')) || 1;
      const currentCategory = this.menuArray.filter(obj => {
        return obj.id === currentId;
      });

      if (!currentCategory[0]) {
        this.router.navigate(['/404']);
      } else {
        this.menuTitle = currentCategory[0].name;
        this.listItems = currentCategory[0].items;
        this.categoryId = currentId;
      }

    });
  }

}
