import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.rounting';

import { AsteroidFastestComponent } from './components/asteroid-fastest/asteroid-fastest.component';
import { HeaderbarComponent } from './components/shared/headerbar/headerbar.component';
import { HomeComponent } from './components/home/home.component';
import { AsteroidDetailsComponent } from './components/asteroid-details/asteroid-details.component';
import { ListAsteroidsComponent } from './components/list-asteroids/list-asteroids.component';
import { HomePage } from './pages/home-page/home-page';

@NgModule({
  declarations: [
    AsteroidFastestComponent,
    HeaderbarComponent,
    HomeComponent,
    AsteroidDetailsComponent,
    ListAsteroidsComponent,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    routing
  ],
  providers: [],
  bootstrap: [HomePage]
})
export class AppModule { }
