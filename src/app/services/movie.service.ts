import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private actionMovies: any;
  private adventureMovies: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { }

  getActionMovies(){
    return new Observable (observer => {
      fetch('../../assets/actionMovies.json')
      .then(resposta => resposta.json())
      .then(json => {
        this.actionMovies = json;
        observer.next(this.actionMovies);
        observer.complete();
      });
    })
  }

  getAdventureMovies(){
    return new Observable (observer => {
      fetch('../../assets/adventureMovies.json')
      .then(resposta => resposta.json())
      .then(json => {
        this.adventureMovies = json;
        observer.next(this.adventureMovies);
        observer.complete();
      })
    })
  }

  goRota(rota: string, numero: string, movies: any){
    const extras: NavigationExtras = {
      state: {
        movie: movies[numero]
      },
    };
    this.router.navigate([rota], extras);
  }

  getInfoMovie() {
    return new Observable (observador => {
      this.rotaAtiva.queryParams.subscribe(params => {
        if(this.router.getCurrentNavigation().extras.state) {
          const infoMovie: any = this.router.getCurrentNavigation().extras.state.movie;
          observador.next(infoMovie);
          observador.complete();
        }
      })
    })
  }
}

