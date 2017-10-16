import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Wiki } from "../../models/Wiki";

@Component({
  selector: 'app-add-wiki',
  templateUrl: './add-wiki.component.html',
  styleUrls: ['./add-wiki.component.scss']
})
export class AddWikiComponent implements OnInit {
  //events
  @Output() wikiAdded = new EventEmitter<Wiki>();

  //properties
  question: string;
  answer: string;

  //methods
  constructor() { }

  //init
  ngOnInit() {
  }

  //functions
  addWiki() {
    this.wikiAdded.emit({ question: this.question, answer: this.answer, show: false });
  }

}
