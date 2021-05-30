import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-info-movies',
  templateUrl: './info-movies.page.html',
  styleUrls: ['./info-movies.page.scss'],
})
export class InfoMoviesPage implements OnInit {

  public movie: any;
  public show = false;
  private mensagem: string;
  public user: any;
  isDisabledWatchList = false;
  isDisabledViewed = false;

  constructor(private toastController: ToastController,private movieServ: MovieService) { }

  ngOnInit() {
    this.movieServ.getInfoMovie().subscribe(infoMovie => {
      this.movie = infoMovie;
    });

    this.user = this.movieServ.getCreatedUser();

    for(let lista of this.user["watchlist"]){
      if(this.movie == lista){
        this.isDisabledWatchList = true;
      }
    }
    for(let lista of this.user["viewed"]){
      if(this.movie == lista){
        this.isDisabledViewed = true;
      }
    }
  }
  displayText() {
    this.show = !this.show;
  }

  /**
    * Toast para apresentar o estado do sistema
    * @param servico
    */

  async presentToast(servico: any) {
    const toast = await this.toastController.create({
      message: servico,
      duration: 1500
    });
    toast.present();
  }

  /**
    * Adicionar movies ao array da watchlist de um user
    */

  addWatchList(){
    let mostra = true;
    for(let lista of this.user["watchlist"]){
      if(this.movie == lista){
        mostra = false;
      }
    }
    mostra ? (() => {
      this.user["watchlist"].push(this.movie);
      this.isDisabledWatchList = true;
      this.presentToast("Added to Watchlist");
    }) ()
    : (() => {
      this.presentToast("Already exists");
    }) ();
  }

  /**
    * Adicionar movies ao array da watchlist de um user
    */

  addViewed(){
    let mostra = true;
    for(let lista of this.user["viewed"]){
      if(this.movie == lista){
        mostra = false;
      }
    }
    mostra ? ( () => {
      this.user["viewed"].push(this.movie);
      console.log(this.user);
      this.isDisabledViewed = true;
      this.presentToast("Added to Viewed");
    }) ()
    :(() => {
      this.presentToast("Already exists");
    }) ();
  }
}
