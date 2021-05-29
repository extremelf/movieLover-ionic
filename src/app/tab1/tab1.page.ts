import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public actionMovies: any;
  public adventureMovies: any;

  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 8,
    slidesPerView: 3,
    freeMode: true,
    loop: false
  };
  constructor(private movieServ: MovieService) {}

  ngOnInit(){
    this.movieServ.getActionMovies().subscribe( movies => {
      this.actionMovies = movies;
    });

    this.movieServ.getAdventureMovies().subscribe( movies => {
      this.adventureMovies = movies;
    });
  }

  verMovie(rota: string, numero: string, movie: any) {
    this.movieServ.goRota(rota,numero, movie);
  }
}
