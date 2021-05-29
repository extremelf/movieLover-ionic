import { Component } from '@angular/core';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public actionMovies: any;

  constructor(private movieServ: MovieService) {}





  verMovie(rota: string, numero: string, movie: any) {
    this.movieServ.goRota(rota,numero, movie);
  }
}
export class SearchPage{

  searchQuery = '';
  items: string[];


  constructor() {
    this.initializemovies();
  }

  initializemovies(){
    this.items = [
      /**
       * Local para is buscar os filmes ao JSON
       */
      'movie1',
      'movie2'
    ];
  }
  getMovies(ev: any){
    this.initializemovies();
    const val = ev.target.value;
    // eslint-disable-next-line eqeqeq
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => (item.toLowerCase().indexOf(val.toLowerCase()) > -1));
    }
  }
}
