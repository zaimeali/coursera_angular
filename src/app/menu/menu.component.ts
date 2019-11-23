import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = [
    {
      id: '0',
      name: 'Uthappizza',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '4.99',
      // tslint: disable-next-line:max-line-length
      description: 'A unique combination of Indian Uthappizza'
    },
    {
      id: '1',
      name: 'Elachi Cheese Cake',
      image: '/assets/images/elaicheesecake.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '1.99',
      // tslint: disable-next-line:max-line-length
      description: 'A unique combination of Indian Elachi Cheese Cake'
    },
    {
      id: '2',
      name: 'Vadonut',
      image: '/assets/images/vadonut.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '2.99',
      // tslint: disable-next-line:max-line-length
      description: 'A unique combination of Indian Vadonut'
    },
    {
      id: '3',
      name: 'Zucchi Pakoda',
      image: '/assets/images/zucchipakoda.png',
      category: 'mains',
      featured: true,
      label: 'Hot',
      price: '3.99',
      // tslint: disable-next-line:max-line-length
      description: 'A unique combination of Indian Zucchi Pakoda'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
