import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BsnTicketPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bsn-ticket',
  templateUrl: 'bsn-ticket.html',
})
export class BsnTicketPage {

	bsnTicketData = {
		"title": "",
		"region": "",
		"priority":"",
		"site_id":"",
		"bsc_rnc":"",
		"time_of_occ": "",
		"cause_of_failure": "",
		"impact": ""
	};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BsnTicketPage');
  }

  addBscTicket(){
  	console.log(this.bsnTicketData);
  }

}
