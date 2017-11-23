import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  goalCount: number
  btnText: string = 'Incluir na lista'
  goalText: string = 'Realizar tudo que me propor a fazer'
  goals = []

  constructor() { }

  ngOnInit() {
    this.goalCount = this.goals.length
  }

  addGoal() {
    this.goals.push(this.goalText)
    this.goalText = ''
    this.goalCount = this.goals.length
  }

}
