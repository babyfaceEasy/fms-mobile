import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TicketUpdatesPage } from '../ticket-updates/ticket-updates';

/**
 * Generated class for the AllTicketsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-tickets',
  templateUrl: 'all-tickets.html',
})
export class AllTicketsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllTicketsPage');
  }

  testFunc(){
  	//console.log('kunle');
  	this.navCtrl.push(TicketUpdatesPage);
  }

}
