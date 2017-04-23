import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, ROUTES } from './modules/app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { MusicModule } from './modules/music/music.module';
import { SportsModule } from './modules/sports/sports.module';
import { CodingModule } from './modules/coding/coding.module';
import { TravellingModule } from './modules/travelling/travelling.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { CodingComponent } from './modules/coding/coding.component';
import { TravellingComponent } from './modules/travelling/travelling.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    MusicModule,
    SportsModule,
    CodingModule,
    TravellingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
