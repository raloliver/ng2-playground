import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wiki-list',
  templateUrl: './wiki-list.component.html',
  styleUrls: ['./wiki-list.component.scss']
})
export class WikiListComponent implements OnInit {
  //properties
  wikis: Object[];

  //functions
  constructor() { 
    this.wikis = [
      {
        question: 'Como você se chama?',
        answer: 'Meu nome é João da Silva'
      },
      {
        question: 'Qual a sua idade?',
        answer: 'Eu tenho 32 anos'
      },
      {
        question: 'Você é casado?',
        answer: 'Sim'
      }
    ]
  }

  //init
  ngOnInit() {
  }

}
