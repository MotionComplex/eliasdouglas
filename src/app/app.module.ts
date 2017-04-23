import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule, ROUTES } from './modules/app-routing.module';
import { NavigationModule } from './common/navigation/navigation.module';
import { HomeModule } from './modules/home/home.module';
import { MeModule } from './modules/me/me.module';
import { MusicModule } from './modules/music/music.module';
import { SportsModule } from './modules/sports/sports.module';
import { CodingModule } from './modules/coding/coding.module';
import { TravellingModule } from './modules/travelling/travelling.module';

import { AppComponent } from './app.component';
import { CodingComponent } from './modules/coding/coding.component';
import { TravellingComponent } from './modules/travelling/travelling.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    FormsModule,
    HttpModule,
    NavigationModule,
    HomeModule,
    MeModule,
    MusicModule,
    SportsModule,
    CodingModule,
    TravellingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
