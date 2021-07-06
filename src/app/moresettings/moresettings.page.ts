import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-moresettings',
  templateUrl: './moresettings.page.html',
  styleUrls: ['./moresettings.page.scss'],
})
export class MoresettingsPage implements OnInit {

  constructor( private route: Router) { }

  ngOnInit() {
  }

  nextPage(){
    this.route.navigate(['/settings']);
  }
}
