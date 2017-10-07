import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListAsteroidsComponent } from './components/list-asteroids/list-asteroids.component';
import { AsteroidDetailsComponent } from './components/asteroid-details/asteroid-details.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'asteroids', component: ListAsteroidsComponent },
    { path: 'asteroids/details/:id', component: AsteroidDetailsComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);