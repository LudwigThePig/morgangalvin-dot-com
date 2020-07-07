import { Injectable } from '@angular/core';
import { myHeroes } from './myHeroes';
import { Observable, of } from 'rxjs';
import { Hero } from '../types';

import { MessageService } from '../message.service';

@Injectable({ // make service injectable
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');

    return of(myHeroes);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(myHeroes.find(hero => hero.id === id))
  }
}
