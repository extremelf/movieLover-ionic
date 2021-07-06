import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { MovieService } from '../services/movie.service';

import { Navigation } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  public actionMovies: any;
  public adventureMovies: any;
  public thrillerMovies: any;
  public user: any;

  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 8,
    slidesPerView: 3.5,
    freeMode: true,
    loop: false
  };
  constructor(private movieServ: MovieService) {
    
  }

  ngOnInit(){
    this.movieServ.getActionMovies().subscribe( movies => {
      this.actionMovies = movies;
    });

    this.movieServ.getAdventureMovies().subscribe( movies => {
      this.adventureMovies = movies;
    })

    this.movieServ.getThrillerMovies().subscribe( movies => {
      this.thrillerMovies = movies;
    })

    this.movieServ.getUser().subscribe(infoUser => {
      this.user = infoUser;
    })
  }

  verMovie(rota: string, numero: string, movie: any) {
    this.movieServ.goRota(rota,numero, movie);
  }
}