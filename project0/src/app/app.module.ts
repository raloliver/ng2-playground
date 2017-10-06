import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AsteroidFastestComponent } from './components/asteroid-fastest/asteroid-fastest.component';
import { HeaderbarComponent } from './components/shared/headerbar/headerbar.component';
import { HomeComponent } from './home/home.component';
import { AsteroidDetailsComponent } from './asteroid-details/asteroid-details.component';
import { ListAsteroidsComponent } from './list-asteroids/list-asteroids.component';

@NgModule({
  declarations: [
    AppComponent,
    AsteroidFastestComponent,
    HeaderbarComponent,
    HomeComponent,
    AsteroidDetailsComponent,
    ListAsteroidsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
