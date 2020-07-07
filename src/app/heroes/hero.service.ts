import { Injectable } from '@angular/core';
import { myHeroes } from './myHeroes';
import { Observable, of } from 'rxjs';
import { Hero } from '../types';


@Injectable({ // make service injectable
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(myHeroes);
  }
}
