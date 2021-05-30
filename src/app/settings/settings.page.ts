import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import FormJSon from '../../assets/loginData.json';
import RootObject = namespace.RootObject;
import {Router} from "@angular/router";
import {NavController} from "@ionic/angular";

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace namespace {

  export interface RootObject {
    key: string;
    type: string;
    required: boolean;
  }
}
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage {
  myform: FormGroup;
  dataForm = FormJSon;
  buttonform: FormGroup;

  /**
  public var username:string ="GoGoGO";
  public var pass:string = "1234";
**/


  constructor(private fb: FormBuilder, private route: Router,public navController: NavController, public formBuilder: FormBuilder ) {
    this.myform= this.fb.group({});
    this.creteControls(this.dataForm);
    /**
     *Outra tentativa de building
     */
    this.buttonform = formBuilder.group({
      pass1:['',Validators.compose([Validators.required])],
      pass2:['',Validators.compose([Validators.required])]
    });
  }

  nextPage(){
    this.route.navigate(['/tab3']);
  }

  creteControls(controls: Array<RootObject>){
  for (const control of controls){
    const newFormControl = new FormControl();

    if(control.required){
      newFormControl.setValidators(Validators.required);
    }
    this.myform.addControl(control.key, newFormControl);
  }
  console.log('My form ', this.myform);

}


}
