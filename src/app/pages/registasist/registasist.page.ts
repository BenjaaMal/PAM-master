import { Component, OnInit } from '@angular/core';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

@Component({
  selector: 'app-registasist',
  templateUrl: './registasist.page.html',
  styleUrls: ['./registasist.page.scss'],
})
export class RegistasistPage implements OnInit {

  qrData=this.crearQR();

  elementType: 'url' | 'img' | 'canvas' = 'canvas';

  constructor(private barcodeScanner : BarcodeScanner,
              private base64ToGallery: Base64ToGallery) { }

  ngOnInit() {
  }

  scannerCode(){

  }

  crearQR():String {
    return "Codigo";
  }
}
