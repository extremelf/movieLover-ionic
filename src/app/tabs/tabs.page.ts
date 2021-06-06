import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { IonRouterOutlet, ModalController, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { Router } from '@angular/router';
import { ModalPageModule } from '../modal/modal.module';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private orientacao: ScreenOrientation, private routerOutlet: IonRouterOutlet, private platform: Platform, private nav: Router, private modalController: ModalController) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);

    App.addListener("backButton", () =>{
      if(this.routerOutlet.canGoBack){
        window.history.back();
      }
      if(this.nav.url == '/tabs/tab1'){
        App.exitApp();
      }      
    })
  }

  async presentModal() {
    console.log("ola")
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }

}
