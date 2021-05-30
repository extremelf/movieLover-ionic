import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InfoMoviesPage } from './info-movies.page';

import { InfoMoviesPageRoutingModule } from './info-movies-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoMoviesPageRoutingModule
  ],
  declarations: [InfoMoviesPage]
})
export class InfoMoviesPageModule {}
