import { Injectable } from '@angular/core';
import { Wiki } from "../models/Wiki";

@Injectable()
export class DataService {
  //properties
  wikis: Wiki[];

  //functions
  constructor() {
    this.wikis = [
      {
        question: 'Como você se chama?',
        answer: 'Meu nome é João da Silva',
        show: false
      },
      {
        question: 'Qual a sua idade?',
        answer: 'Eu tenho 32 anos',
        show: false
      },
      {
        question: 'Você é casado?',
        answer: 'Sim',
        show: false
      }
    ]
  }

  //methods
  getWikis() {
    return this.wikis;
  }

}
