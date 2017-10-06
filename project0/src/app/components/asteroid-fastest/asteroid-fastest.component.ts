//importação
import { Component, OnInit } from '@angular/core';

//definição
@Component({
  selector: 'asteroid-fastest', //<asteroid-fastest></asteroid-fastest>
  templateUrl: './asteroid-fastest.component.html'  
})

//exportação
export class AsteroidFastestComponent implements OnInit {

  constructor() { 
    console.info('on constructor...')
  }

  ngOnInit() {
    console.info('on OnInit()...')
  }

}
