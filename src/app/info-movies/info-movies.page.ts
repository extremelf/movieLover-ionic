import { Component, OnInit } from '@angular/core';
import {PopoverController, ToastController} from '@ionic/angular';
import { MovieService } from '../services/movie.service';
import {PopoverComponent} from "../popover/popover.component";

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

  constructor(private toastController: ToastController,private movieServ: MovieService, public popoverController: PopoverController) { }

  ngOnInit() {
    this.movieServ.getInfoMovie().subscribe(infoMovie => {
      this.movie = infoMovie;
    });

    this.user = this.movieServ.getCreatedUser();

    for(let lista of this.user.lists[1].movies){
      if(this.movie == lista){
        this.isDisabledWatchList = true;
      }
    }
    for(let lista of this.user.lists[0].movies){
      if(this.movie == lista){
        this.isDisabledViewed = true;
      }
    }
  }
  displayText() {
    this.show = !this.show;
  }

  async presentPopover(movie) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      translucent:true,
      componentProps:{key1: this.movie}
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
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
    for(let lista of this.user.lists[1].movies){
      if(this.movie == lista){
        mostra = false;
      }
    }
    mostra ? (() => {
      this.user.lists[1].movies.push(this.movie);
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
    for(let lista of this.user.lists[0].movies){
      if(this.movie == lista){
        mostra = false;
      }
    }
    mostra ? ( () => {
      this.user.lists[0].movies.push(this.movie);
      console.log(this.user);
      this.isDisabledViewed = true;
      this.presentToast("Added to Viewed");
    }) ()
    :(() => {
      this.presentToast("Already exists");
    }) ();
  }
}
