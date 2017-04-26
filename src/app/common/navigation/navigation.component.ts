import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { ROUTES } from './../../modules/app-routing.module';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  routes: Routes = ROUTES.filter(r => r.path !== '');

  constructor() { 
    console.log(ROUTES);
  }

  ngOnInit() {
  }
}
