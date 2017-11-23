import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  goalCount: number = 4
  btnText: string = 'Incluir na lista'

  constructor() { }

  ngOnInit() {
  }

}
