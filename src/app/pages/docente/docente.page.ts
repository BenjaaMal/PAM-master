import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service'

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {

  constructor(
    private authSer: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  logoutUser(){
    this.authSer.logout();
  }

}
