import { Component, OnInit } from '@angular/core';
import { Hero } from '../types';
import { HeroService } from './hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) { }

  heroes: Hero[];

  selectedHero: Hero = null;

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add(`Hero #${hero.id}: ${hero.name} selected!`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => { this.heroes = heroes; });
  }

}
