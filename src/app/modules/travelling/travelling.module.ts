import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from './../../common/navigation/navigation.module';

import { TravellingComponent } from './travelling.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule
  ],
  declarations: [
    TravellingComponent
  ]
})
export class TravellingModule { }
