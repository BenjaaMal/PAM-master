import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    public authenticationService: AuthenticationService,
  ) { }

  anActivate():Boolean {
    console.log('estado: '+this.authenticationService.isAuthenticated());
    return this.authenticationService.isAuthenticated();
  }
  
}
