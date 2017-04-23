import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from './../../common/navigation/navigation.module';

import { CodingComponent } from './coding.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule
  ],
  declarations: [
    CodingComponent
  ]
})
export class CodingModule { }
