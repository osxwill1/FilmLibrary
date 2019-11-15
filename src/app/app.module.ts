import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmListItemComponent } from './film-list-item/film-list-item.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { StartseiteComponent } from './startseite/startseite.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmListItemComponent,
    FilmDetailsComponent,
    StartseiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
