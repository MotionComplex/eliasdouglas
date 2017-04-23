import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isNavigationEnabled: boolean;

  constructor(private router: Router) {
    this.isNavigationEnabled = this.router.url !== '/music';
    console.log(this.isNavigationEnabled);
  }
}
