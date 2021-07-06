import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoresettingsPageRoutingModule } from './moresettings-routing.module';

import { MoresettingsPage } from './moresettings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoresettingsPageRoutingModule
  ],
  declarations: [MoresettingsPage]
})
export class MoresettingsPageModule {}
