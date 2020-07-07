import { Injectable } from '@angular/core';
import { myHeroes } from './myHeroes';

@Injectable({ // make service injectable
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() {
    return myHeroes;
  }
}
