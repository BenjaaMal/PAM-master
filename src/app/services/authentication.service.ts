import { Injectable } from '@angular/core';
/*
  Importar algunas librerias
*/
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //almacena el estado de la authenticatioc
  authState = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private storage: Storage,
    private toasCtrl: ToastController,
    private platfom: Platform,
  ) {
    //Cuando la aplicacion inicie
    this.platfom.ready().then(()=>{
      this.ifLoginIn();
    });
  }
  //Verifica si esta logeado
  ifLoginIn(){
    this.storage.create();            //Inicia el storage
    //Intento buscar el user en el almacenamiento y si existe cambia el estado
    this.storage.get('USER').then((response)=>{
      if(response){
        this.authState.next(true);
      }
    });
  }
  //Crear un ligin de acceso
  login(){
    var objeto = {
      user_id: 'juanito',
      user_pass: '1234',
    };
    this.storage.create();
    this.storage.set('USER',objeto).then((response)=>{
      console.log(objeto);
      this.router.navigate(['/dashboard']);
      this.authState.next(true);
    });
  }
  //permite salir del login
  logout(){
    this.storage.create();
    this.storage.remove('USER').then(()=>{
      this.router.navigate(['/login']);
      this.authState.next(false);
    });
  }
  //Verifica que me encuentre logeado
  isAuthenticated():Boolean{
    return this.authState.value;
  }

}
