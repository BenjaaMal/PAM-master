import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Acces-control-Allow-Origin':'**',
    })
  }
  ruta:String="";

  constructor() { }
}
