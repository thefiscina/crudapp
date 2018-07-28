import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-visualizarservico',
  templateUrl: 'visualizarservico.html',
})
export class VisualizarservicoPage {
  @ViewChild('textAreaid') textAreaid: ElementRef;
  check:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizarservicoPage');
  }

  resize() {
    var element = this.textAreaid['_elementRef'].nativeElement.getElementsByClassName("text-input")[0];
    var scrollHeight = element.scrollHeight;
    element.style.height = scrollHeight + 'px';
    this.textAreaid['_elementRef'].nativeElement.style.height = (scrollHeight + 16) + 'px';
    console.log(this.textAreaid['_elementRef'].nativeElement.style.height)
    if (this.textAreaid['value'] == '' || this.textAreaid['value'] == null) {
      this.textAreaid['_elementRef'].nativeElement.style.height = '37px'
    }
  }


  aceitarProposta() {
    if(this.check){
      this.check = false;
    }else{
      this.check = true;
    }
    this.presentToast('Proposta aceita');
  }

  presentToast(msg) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }
}
