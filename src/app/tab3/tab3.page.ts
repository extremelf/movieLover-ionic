import { Component, OnInit } from '@angular/core';
import {MovieService} from '../services/movie.service';
import {Router} from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

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
    slidesPerView: 3.5,
    freeMode: true,
    loop: false
  };
  constructor(private movieServ: MovieService, private route: Router, private authService: AuthenticationService) {}

  ngOnInit(){
    this.user = this.movieServ.getCreatedUser();
  }

  nextPage(){
    this.route.navigate(['/moresettings']);
  }


  verMovie(rota: string, numero: string, movie: any) {
    this.movieServ.goRota(rota,numero, movie);
  }

  async logout(){
    await this.authService.logout();
    this.route.navigateByUrl('/', { replaceUrl: true});
  }

  getSize(lista){
    return Object.keys(lista).length;
  }

  isListsClear(){
    let tamanho = 0
    for(let lista of Object.keys(this.user.lists)){
      if(Object.keys(this.user.lists[lista].movies).length > 0){

        tamanho++
      }
    }
    console.log(tamanho)
    return tamanho;
  }
}
