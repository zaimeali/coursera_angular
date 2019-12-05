import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';

// import { DISHES } from '../shared/dishes'; not an ideal way to fetch the information instead of this you can use services
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  dishes: Dish[];

  selectedDish: Dish;

  constructor(private dishService: DishService) { }

  // Life Cycle method and will be implemented by angular when this component is init then this method will be use
  ngOnInit() {
    // ask this service to fetch
    this.dishes = this.dishService.getDishes();
    // invoking get method 
  }

  onSelect(dish: Dish){
    this.selectedDish = dish;
  }

}
