import { Injectable } from '@angular/core';
import { Wiki } from "../models/Wiki";

@Injectable()
export class DataService {
  //properties
  wikis: Wiki[];

  //methods
  constructor() {
    // this.wikis = [
    //   {
    //     question: 'Como você se chama?',
    //     answer: 'Meu nome é João da Silva',
    //     show: false
    //   },
    //   {
    //     question: 'Qual a sua idade?',
    //     answer: 'Eu tenho 32 anos',
    //     show: false
    //   },
    //   {
    //     question: 'Você é casado?',
    //     answer: 'Sim',
    //     show: false
    //   }
    // ]
  }

  //functions
  //get wikis from ls
  getWikis() {
    if (localStorage.getItem('wikis') === null) {
      this.wikis = [];
    } else {
      this.wikis = JSON.parse(localStorage.getItem('wikis'));
    }
    return this.wikis;
  }

  // add wiki from ls
  addWiki(wiki: Wiki) {
    this.wikis.unshift(wiki); //unshift to add on top; push to add on bottom

    // properties (local)
    let wikis;

    if (localStorage.getItem('wikis') === null) {
      wikis = [];
      // push new wiki
      wikis.unshift(wiki);
      // new array to ls
      localStorage.setItem('wikis', JSON.stringify(wikis));
      
    } else {
      wikis = JSON.parse(localStorage.getItem('wikis'));
      // add new wiki
      wikis.unshift(wiki);
      // reset ls
      localStorage.setItem('wikis', JSON.stringify(wikis));
    }
  }

  //remove wiki from ls
  removeWiki(wiki: Wiki) {
    for (let i = 0; i < this.wikis.length; i++) {
      if (wiki == this.wikis[i]) {
        this.wikis.splice(i, 1);
        localStorage.setItem('wikis', JSON.stringify(this.wikis));
      }
    }
  }

}
