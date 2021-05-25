import { Component, ViewChild } from '@angular/core';
import { NavController, IonSlide } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {
  slidesOptions = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 8,
    slidesPerView: 3,
    freeMode: true,
    loop: false
  };
  constructor(public navCtrl: NavController) {}
  
}