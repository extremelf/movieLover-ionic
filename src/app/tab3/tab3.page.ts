import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  public actionMovies: any;
  public user: any;

  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 8,
    slidesPerView: 3,
    freeMode: true,
    loop: false
  };
  constructor(private movieServ: MovieService, private route: Router) {}

  ngOnInit(){
    this.user = this.movieServ.getCreatedUser();
  }

  nextPage(){
    this.route.navigate(['/settings']);
  }


  verMovie(rota: string, numero: string, movie: any) {
    this.movieServ.goRota(rota,numero, movie);
  }
}
