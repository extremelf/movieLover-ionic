import { Component, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { ToastController, IonList, IonItem } from '@ionic/angular';  

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public tipoClass: any;
  
  constructor(public toastCtrl: ToastController) {}

  @ViewChildren(IonItem,{read: ElementRef}) lista: QueryList<ElementRef>;

  filterSearch(evt){
    this.lista.forEach(item =>{
      console.log(item.nativeElement.inneHTML);
      
      const show = item.nativeElement.innerHTML.toLowerCase().indexOf(evt.target.value.toLowerCase()) > -1;
      //console.log(item);
      item.nativeElement.style.display = show? 'block' : 'none';
      //item.nativeElement.attributes.class.nodeValue = show ? 'ion-hidden' : 'item md in-list ion-focusable hydrated';
    });
  }
}
