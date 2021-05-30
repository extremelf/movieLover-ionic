import { Component } from '@angular/core';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private orientacao: ScreenOrientation) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);
  }
}
