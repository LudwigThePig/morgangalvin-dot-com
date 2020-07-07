import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { myHeroes } from './myHeroes';
import { Observable, of } from 'rxjs';
import { Hero } from '../types';

import { MessageService } from '../message.service';

@Injectable({ // make service injectable
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService,
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return this.httpClient.get<Hero[]>(this.heroesUrl)

  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(myHeroes.find(hero => hero.id === id))
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
