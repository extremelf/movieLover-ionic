import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import FormJSon from '../../assets/loginData.json';
import RootObject = namespace.RootObject;

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

export class SettingsPage implements OnInit {
  myform: FormGroup;
  dataForm = FormJSon;

  constructor(private fb: FormBuilder) {
    this.myform= this.fb.group({});
    this.creteControls(this.dataForm);
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
  ngOnInit() {
  }

}
