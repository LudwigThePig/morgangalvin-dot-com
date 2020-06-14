import { Component, OnInit } from '@angular/core';

import { myHeroes } from './myHeroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor() { }
  heroes = myHeroes;

  ngOnInit(): void {
  }

}
