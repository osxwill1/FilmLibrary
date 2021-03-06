import { Injectable } from '@angular/core';
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmStoreService {
  films: Film[];

  constructor() {
    this.films = [
      {
        gtin: '4010324201270',
        title: 'Die Bestimmung - Divergent',
        authors: ['Veronica Roth', 'Carlo Poggioli', 'Andy Nicholson'],
        published: '04.03.2015',
        subtitle: 'Für alle Fans von Die Tribute von Panem ein Must-See',
        rating: 5,
        thumbnails: ['http://ecx.images-amazon.com/images/I/51c%2B-I1LBsL.jpg'],
        description: 'Aufwühlende Verfilmung des gleichnamigen Fortsetzungromans Chicago in der Zukunft...',
        awarded: 'Florian Will',
      },
      {
        gtin: '5017239152351',
        title: 'American Hustle',
        authors: ['Christian Bale', 'Amy Adams', 'David O. Russell'],
        published: '27.04.2014',
        subtitle: 'Based on the Abscam sting operation of the late 1970s and early 1980s',
        rating: 3,
        thumbnails: ['http://ecx.images-amazon.com/images/I/51b420rtedL.jpg'],
        description: 'Award-winning crime drama directed by David O. Russell and starring Christian Bale and Bradley Cooper....',
      }
    ];
  }

   getAll(): Film[] {
     return this.films;
   }

   getSingle(gtin: string): Film {
     return this.films.find(film => film.gtin === gtin);
   }
}
