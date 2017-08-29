import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

  }

  logout(){
  	//here we decide to remove the Api tokens
  	//then you can redirect
  	localStorage.removeItem('token');
  	const root = this.app.getRootNav();
  	root.setRoot(WelcomePage);
  }//end of logout

}
