import { Component, OnInit, Input } from '@angular/core';

import { Wiki } from "../../models/Wiki";

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent implements OnInit {
  @Input('wiki') wiki: Wiki ;

  constructor() { }

  ngOnInit() {
  }

}
