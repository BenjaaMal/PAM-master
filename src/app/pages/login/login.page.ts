import { Component, OnInit } from '@angular/core';

//implementar el authentication service
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Usuario } from '../../model/usuariointerfaces';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authenSer: AuthenticationService,
    private toasCtrl: ToastController,
  ) { }

  ngOnInit() {
  }
  user: Usuario = {
    nombre: '',
    pass: '',
  }

  //AQUI ESTA EL INICIO DE SESION
  loginUser(){
    if(this.user.nombre == "admin" && this.user.pass == "admin") {
      this.authenSer.login();
    }else {
      this.toasCtrl.create({
        message: 'usuario o clave incorrecta',
        duration: 3000,
        position: 'bottom',
      }).then((toast)=>{
        toast.present();
      });
    }
  }

}
