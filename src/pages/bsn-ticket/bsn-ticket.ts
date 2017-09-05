import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

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

	bsnTicketForm : FormGroup;
	submitAttempt: boolean = false;

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

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, formBuilder: FormBuilder) {

  	this.bsnTicketForm = formBuilder.group({
  		title: ['', Validators.compose([Validators.required])],
  		region: ['', Validators.compose([Validators.required])],
  		priority: ['', Validators.compose([Validators.required])],
  		site_id: ['', Validators.compose([Validators.required])],
  		bsc_rnc: ['', Validators.compose([Validators.required])],
  		time_of_occ: ['', Validators.compose([Validators.required])],
  		cause_of_failure: ['', Validators.compose([Validators.required])],
  		impact: ['', Validators.compose([Validators.required])]
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BsnTicketPage');
  }

  addBsnTicket(){
  	this.submitAttempt = true;

  	if(!this.bsnTicketForm.valid){
  		return;
  	}
  	console.log(this.bsnTicketForm.value);
  }

}
