import { Component, OnInit } from '@angular/core';
import { Film } from '../shared/film';
import { FilmStoreService } from '../shared/film-store.service';

@Component({
  selector: 'fl-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: Film[];

  constructor(private fs: FilmStoreService) { }

  ngOnInit() {
    this.films = this.fs.getAll();
  }

}
