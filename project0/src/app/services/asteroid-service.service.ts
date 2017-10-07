import { Injectable } from '@angular/core'; //permite a injeção deste serviço em vários componentes
import { Http, Response } from '@angular/http';
import "rxjs/Rx";
import { Asteroid } from '../models/asteroid';

@Injectable()
export class AsteroidService {
  //tudo que é criado como private no constructor, deve ser invocado como this dentro da função
  constructor(private http: Http) { }
  //use o this. para invocar os métodos disponíveis
  getAsteroids() {
    return this.http.get('http://jsonplaceholder.typicode.com/todos')
      //https://api.nasa.gov/neo/rest/v1/feed?api_key=2f6giEMBBC4SHtKn26HLm3fLH3IIhZD4Vjk2HMHl
      //aqui é possível trabalhar com promisses ou com observables (aqui mapeamos o resultado para um estilo json)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getAsteroid(id: number) {
    //https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=2f6giEMBBC4SHtKn26HLm3fLH3IIhZD4Vjk2HMHl
    return this.http.get('http://jsonplaceholder.typicode.com/todos/' + id)
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error);
  }
}