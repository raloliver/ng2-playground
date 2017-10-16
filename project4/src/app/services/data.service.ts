import { Injectable } from '@angular/core';
import { Wiki } from "../models/Wiki";

@Injectable()
export class DataService {
  //properties
  wikis: Wiki[];

  //methods
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

  //functions
  getWikis() {
    return this.wikis;
  }

  addWiki(wiki: Wiki) {
    this.wikis.unshift(wiki); //unshift to add on top; push to add on bottom
  }

  removeWiki(wiki: Wiki) {
    for (let i = 0; i < this.wikis.length; i++) {
      if (wiki == this.wikis[i]){
        this.wikis.splice(i, 1);
      }
    }
  }

}
