import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RestaurantService } from '../../restaurants/restaurant.service';

import {Observable} from 'rxjs/Observable'
import { MenuItem } from '../menu-item/menu-item.model';
import { MenuItemComponent } from '../menu-item/menu-item.component';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem>

  constructor(private restaurantsService: RestaurantService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantsService
      .menuOfRestaurant(this.route.parent.snapshot.params['id'])
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
