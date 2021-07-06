import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoresettingsPage } from './moresettings.page';

const routes: Routes = [
  {
    path: '',
    component: MoresettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoresettingsPageRoutingModule {}
