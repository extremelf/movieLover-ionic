import {Component, OnInit} from '@angular/core';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  public actionMovies: any;
  constructor(private movieServ: MovieService) {}

  ngOnInit(): void {
  }



  verMovie(rota: string, numero: string, movie: any) {
    this.movieServ.goRota(rota,numero, movie);
  }

}
