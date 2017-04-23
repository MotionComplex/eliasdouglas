import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MeComponent } from './me/me.component';
import { MusicComponent } from './music/music.component';
import { SportsComponent } from './sports/sports.component';
import { CodingComponent } from './coding/coding.component';
import { TravellingComponent } from './travelling/travelling.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'me',
    component: MeComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'sports',
    component: SportsComponent
  },
  {
    path: 'coding',
    component: CodingComponent
  },
  {
    path: 'travelling',
    component: TravellingComponent
  }
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [ ]
})
export class AppRoutingModule { }
