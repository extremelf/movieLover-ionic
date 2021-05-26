import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoMoviesPage } from './info-movies.page';

const routes: Routes = [
  {
    path: '',
    component: InfoMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoMoviesPageRoutingModule {}
