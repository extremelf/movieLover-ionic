import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoMoviesPageRoutingModule } from './info-movies-routing.module';

import { InfoMoviesPage } from './info-movies.page';

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
