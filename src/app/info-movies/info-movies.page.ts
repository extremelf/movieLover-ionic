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
  constructor(private toastController: ToastController,private movieServ: MovieService) { }

  ngOnInit() {
    this.movieServ.getInfoMovie().subscribe(infoMovie => {
      this.movie = infoMovie;
    });
  }
  displayText() {
    this.show = !this.show
  }

  async presentToast(servico: any) {
    this.mensagem = 'Shared on '.concat(servico);
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000
    });
    toast.present();
  }
  

}
