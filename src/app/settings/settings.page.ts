import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Router } from "@angular/router";
import { NavController, ToastController } from "@ionic/angular";
import { MovieService } from '../services/movie.service';


/**
  * verifica se os campos de nova password são iguais
  * @param fg
  */

const matchPasswordValidator: ValidatorFn = (fg: FormGroup) => {
  const pass1 = fg.get('pass1').value;
  const pass2 = fg.get('pass2').value;

  return pass1 !== null && pass2 !== null && pass1 == pass2 ? null : { range: true };
}

/**
  * Verifica se o campo password antiga corresponde à atual
  */
const oldPasswordValidator : ValidatorFn  = (fg: FormGroup) => {
  const oldPassword = fg.get('passold').value;
  const atualUser = fg.get('passAtual');
  const atualPassword = atualUser.value.password;

  return oldPassword !== null && oldPassword === atualPassword ? null : { range: true } ;
}

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit{
  myform: FormGroup;
  usernameForm: FormGroup;
  buttonform: FormGroup;
  public user: any;


  constructor(public fb: FormBuilder, private route: Router,public navController: NavController, private movieServ: MovieService, private toastController: ToastController ) {
  
  }

  /**
    * Guarda o utilizador logado e 
    * Valida os dados inseridos no form
    */

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

  /**
    * Metodo usado para trocar de página
    */

  nextPage(){
    this.route.navigate(['/tab3']);
}

/**
  * Toast para apresentar o estado do sistema
  * @param servico
  */

async presentToast(servico: any) {
  const toast = await this.toastController.create({
    message: servico,
    duration: 1500
  });
  toast.present();
}

/**
  * Metodo para submeter os inputs nos forms de Passwords
  */

submitForm(){
  if(!this.myform.valid) {
    this.presentToast("Password does not match")
    return false;
  } else {
    this.presentToast("Password changed")
    this.user.password = this.myform.value.pass2;
  }
}

/**
  * Metodo para submeter os inputs nos forms de username
  */

submitUsername(){
  if(!this.usernameForm.valid) {
    this.presentToast("Username change error");
    return false;
  } else {
    this.presentToast("Username changed");
    this.user.nome = this.usernameForm.value.newUsername;
  }
}
}
