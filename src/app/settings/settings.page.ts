import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import FormJSon from '../../assets/loginData.json';
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { MovieService } from '../services/movie.service';

const matchPasswordValidator: ValidatorFn = (fg: FormGroup) => {
  const pass1 = fg.get('pass1').value;
  const pass2 = fg.get('pass2').value;

  return pass1 !== null && pass2 !== null && pass1 == pass2 ? null : { range: true };
}

const oldPasswordValidator : ValidatorFn  = (fg: FormGroup) => {
  const oldPassword = fg.get('passold').value;
  const atualUser = fg.get('passAtual');
  const atualPassword = atualUser.value.password;

  return oldPassword !== null && oldPassword === atualPassword ? null : { range: true } ;
}

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

export class SettingsPage implements OnInit{
  myform: FormGroup;
  usernameForm: FormGroup;
  dataForm = FormJSon;
  buttonform: FormGroup;
  public user: any;


  constructor(public fb: FormBuilder, private route: Router,public navController: NavController, private movieServ: MovieService ) {
  
  }

  ngOnInit(){
    this.user = this.movieServ.getCreatedUser();

    this.usernameForm = this.fb.group({
      newUsername:['',Validators.required]
    });

    this.myform = this.fb.group({
      passAtual: this.user,
      passold:['',Validators.required],
      pass1:['',Validators.required],
      pass2:['',Validators.required],
    },
      {
        validator: [matchPasswordValidator, oldPasswordValidator]
      }
    );
  }


  nextPage(){
    this.route.navigate(['/tab3']);
  }

submitForm(){
  if(!this.myform.valid) {
    return false;
  } else {
    this.user.password = this.myform.value.pass2;
    console.log(this.myform.value);
    console.log(this.user);
  }
}

submitUsername(){
  if(!this.usernameForm.valid) {
    console.log(this.usernameForm.value);
    return false;
  } else {
    console.log(this.usernameForm.value);
    this.user.nome = this.usernameForm.value.newUsername;
    
    console.log(this.user);
  }
}
}
