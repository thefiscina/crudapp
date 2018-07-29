import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PrincipalPage } from '../pages/principal/principal';
import { PerfilPage } from '../pages/perfil/perfil';
import { MeusservicosPage } from '../pages/meusservicos/meusservicos';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'LoginPage';

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: 'PrincipalPage' },      
      { title: 'Serviços', component: 'MeusservicosPage' },
      { title: 'Perfil', component: 'PerfilPage' }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {    
    this.nav.setRoot(page.component);
  }
}
