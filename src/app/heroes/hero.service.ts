import { Injectable } from '@angular/core';
import { myHeroes } from './myHeroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() {
    return myHeroes;
  }
}
