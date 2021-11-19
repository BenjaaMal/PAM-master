import { Component } from '@angular/core';
/*
  Importar el servicio de autentication para determinar cual
  paguina debe presentar al inicio
*/
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private platform: Platform,
    private authenSer: AuthenticationService,
  ) {
    platform.ready().then(() =>{
      this.inicializar();
    })
  }
  inicializar(){
    this.authenSer.authState.subscribe(state => {
      if (state) {
        this.router.navigate(['/secciones']);
      }else {
        this.router.navigate(['/login']);
      }
    })
  }

}
