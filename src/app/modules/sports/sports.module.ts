import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from './../../common/navigation/navigation.module';

import { SportsComponent } from './sports.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule
  ],
  declarations: [SportsComponent]
})
export class SportsModule { }
