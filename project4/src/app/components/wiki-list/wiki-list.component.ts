import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

import { Wiki } from "../../models/Wiki";

@Component({
  selector: 'app-wiki-list',
  templateUrl: './wiki-list.component.html',
  styleUrls: ['./wiki-list.component.scss']
})
export class WikiListComponent implements OnInit {
  //properties with interfaces
  wikis: Wiki[];

  //functions
  constructor(public dataService: DataService) {

  }

  //init
  ngOnInit() {
    this.wikis = this.dataService.getWikis()
  }

}
