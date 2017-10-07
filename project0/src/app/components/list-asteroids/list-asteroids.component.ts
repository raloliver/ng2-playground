import { Component, OnInit } from '@angular/core';
import { Asteroid } from '../../models/asteroid';
import { AsteroidService } from '../../services/asteroid-service.service';

@Component({
  selector: 'list-asteroids',
  templateUrl: './list-asteroids.component.html',
  providers: [AsteroidService] //injeção de dependência 
})

export class ListAsteroidsComponent implements OnInit {
  asteroids: Asteroid[];
  errorMessage: string;

  constructor(private asteroidService: AsteroidService) { }

  //bom lugar para instânciar as funções
  ngOnInit() {
    this.getAsteroids();
  }

  getAsteroids() {
    //com o .subscribe assinamos a promisse e ficamos sempre de olho na resposta dela    
    this.asteroidService.getAsteroids().subscribe(data => { this.asteroids = data, error => console.log(error); });
  }

}
