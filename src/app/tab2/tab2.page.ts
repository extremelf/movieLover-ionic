import { importExpr } from '@angular/compiler/src/output/output_ast';
import { Component, ViewChild, ViewChildren } from '@angular/core';
import { ToastController, IonList, IonItem } from '@ionic/angular';  

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor(public toastCtrl: ToastController) {}

  private items = <HTMLElement[]>Array.from(document.querySelector("ion-list").children);

  updateSearchResults2(event){
    const query = event.target.value.toLowerCase();
      if(this.items != null){this.items.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
        item.style.display = shouldShow ? 'block' : 'none';
      });}
  }
}
