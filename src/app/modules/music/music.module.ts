import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from './../../common/navigation/navigation.module';

import { MusicComponent } from './music.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule
  ],
  declarations: [MusicComponent]
})
export class MusicModule { }
