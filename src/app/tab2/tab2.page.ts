import { Component, QueryList, ViewChildren, ElementRef, OnInit } from '@angular/core';
import { IonCard, IonImg } from '@ionic/angular';  
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public tipoClass: any;
  public actionMovies: any;
  public adventureMovies: any;
  public thrillerMovies: any;


  slidesOptions = {
    initialSlide: 0,
    direction: 'vertical',
    speed: 300,
    spaceBetween: 8,
    slidesPerView: 3,
    freeMode: true,
    loop: false
  };
  
  constructor(private movieServ: MovieService ) {}

  

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
  }

  @ViewChildren(IonCard,{read: ElementRef}) lista: QueryList<ElementRef>;

  filterSearch(evt){
    this.lista.forEach(item =>{    
      const show = item.nativeElement.children[1].innerHTML.toLowerCase().indexOf(evt.target.value.toLowerCase()) > -1;
      item.nativeElement.style.display = show? 'block' : 'none';
    });
  }

  verMovie(rota: string, numero: string, movie: any) {
    this.movieServ.goRota(rota,numero, movie);
  }
}
