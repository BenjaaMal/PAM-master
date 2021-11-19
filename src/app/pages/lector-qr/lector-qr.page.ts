import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQRPage implements OnInit {

  constructor(
    private barcodeScaner: BarcodeScanner,
    private toastCtrl: ToastController,
  ) { }

  ngOnInit() {
  }

  scanner() {
    this.barcodeScaner.scan().then(barcodeData => {
      this.presentar(barcodeData);
    });
  }

  async presentar(mensaje:any){
    let toast = this.toastCtrl.create({
      message: 'Lectura Scanner: '+mensaje,
      duration: 5000,
      position: 'top',
    });
    await (await toast).present();
  }

}
