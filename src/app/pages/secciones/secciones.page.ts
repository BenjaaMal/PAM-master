import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage implements OnInit {

  constructor(
    private authSer: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  logoutUser(){
    this.authSer.logout();
  }

}
