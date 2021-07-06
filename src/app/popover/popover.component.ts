import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavParams } from '@ionic/angular';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  isshown = false;
  user: any;
  movie:any;
   modelData={
    "name": "nova",
    "movies": []
   }

  constructor(private movieServ: MovieService, public navParams:NavParams) {
    this.movie = navParams.get('key1');
   }

  ngOnInit() {
    this.user = this.movieServ.getCreatedUser();
  }

  toogleShow(){
    this.isshown = ! this.isshown;
  }
  adicionarlista(lista){
  this.user.lists[lista].movies.push(this.movie);
  }
  novalista(){
    console.log(this.user.lists)
    this.user.lists.push(this.modelData);
    
  }

}
