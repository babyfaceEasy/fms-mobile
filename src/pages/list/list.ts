import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  registerData = {
    "fullname":"",
    "email":"",
    "phone_no": "",
    "region":"",
    "role": "",
    "password":""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  register(){
    console.log(this.registerData);
  }
}
