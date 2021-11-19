import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';



@Component({
  selector: 'app-registrar-asist',
  templateUrl: './registrar-asist.page.html',
  styleUrls: ['./registrar-asist.page.scss'],
})
export class RegistrarAsistPage implements OnInit {

  qrData="";

  elementType: 'url' | 'img' | 'canvas' = 'canvas';
  constructor(private barcodeScanner : BarcodeScanner,
              private base64ToGallery: Base64ToGallery) { }

  ngOnInit() {
  }

  scannerCode(){

  }
}
