import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Asteroid } from '../../models/asteroid';
import { AsteroidService } from '../../services/asteroid-service.service';

@Component({
  selector: 'asteroid-details',
  templateUrl: './asteroid-details.component.html',
  providers: [AsteroidService]
})
export class AsteroidDetailsComponent implements OnInit {
  asteroid: Asteroid = new Asteroid();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: AsteroidService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id: number = params['id'];
      this.getAsteroid(id);
    });
  }

  getAsteroid(id: number) {
    this.courseService.getAsteroid(id)
      .subscribe(data => this.asteroid = new Asteroid(data),
      error => console.log(error));
  }

}
