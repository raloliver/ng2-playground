import { Component, OnInit, Input } from '@angular/core';

import { Wiki } from "../../models/Wiki";
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  //events
  @Input('wiki') wiki: Wiki;

  //methods
  constructor(public dataService: DataService) { }

  //init
  ngOnInit() {
  }

  //functions
  removeWiki(wiki) {
    this.dataService.removeWiki(wiki);
  }

}
