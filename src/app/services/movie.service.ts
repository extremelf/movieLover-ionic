import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private actionMovies: any;
  private adventureMovies: any;
  private thrillerMovies: any;
  private user: any;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { }

  /**
    * Metodos com recurso a observable para carregar informação provenientes de JSON dos respetivos tipos de filme
    */

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

  getThrillerMovies(){
    return new Observable (observer => {
      fetch('../../assets/thrillerMovies.json')
      .then(resposta => resposta.json())
      .then(json => {
        this.thrillerMovies = json;
        observer.next(this.thrillerMovies);
        observer.complete();
      })
    })
  }

  /**
    * ---------------------------------------------------------------------------------------
    * ---------------------------------------------------------------------------------------
    * ---------------------------------------------------------------------------------------
    */

  /**
    * Metodo com Observable para dar fecth na informação proviniente do JSON dos users.
    * Cria o users tabem sendo depois possivel averiguar na consola se os respetivos users estão a sr passados
    */

  getUser(){
    return new Observable (observer => {
      fetch('../../assets/user.json')
      .then(resposta => resposta.json())
      .then(json => {
        this.user = json;
        console.log(this.user);
        observer.next(this.user);
        observer.complete();
      })
    })
  }

  /**
    * Pega no user já criado
    */

  getCreatedUser(){
    return this.user;
  }

  /**
    * Metodo usado para nevagr e passar informações entre páginas,
    * concretamente o que etá contido no Json
    *
    * @param rota
    * @param numero
    * @param movies
    */

  goRota(rota: string, numero: string, movies: any){
    const extras: NavigationExtras = {
      state: {
        movie: movies[numero]
      },
    };
    this.router.navigate([rota], extras);
  }

  /**
    * Metodo que envia a informação do movie recebido na rota para a página de destino
    */
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

