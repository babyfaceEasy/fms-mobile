import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TransmissionTicketPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transmission-ticket',
  templateUrl: 'transmission-ticket.html',
})
export class TransmissionTicketPage {

	transmissionTicketData = {
		"title": "",
		"region": "",
		"priority":"",
		"node_a":"",
		"node_b":"",
		"vendor": "",
		"time_of_occ": "",
		"cause_of_failure": "",
		"impact": ""
	}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransmissionTicketPage');
  }

}
