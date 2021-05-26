import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-info-movies',
  templateUrl: './info-movies.page.html',
  styleUrls: ['./info-movies.page.scss'],
})
export class InfoMoviesPage implements OnInit {

  public movie: any;

  constructor(private movieServ: MovieService) { }

  ngOnInit() {
    this.movieServ.getInfoMovie().subscribe(infoMovie => {
      this.movie = infoMovie;
    });
  }

}
