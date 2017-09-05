import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

	submitAttempt :boolean = false;
	transmissionTicketForm: FormGroup;

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
	};

  constructor(public navCtrl: NavController, public navParams: NavParams, 
  	formBuilder: FormBuilder) {

  	this.transmissionTicketForm = formBuilder.group({
  		title: ['', Validators.compose([Validators.required])],
  		region: ['', Validators.compose([Validators.required])],
  		priority: ['', Validators.compose([Validators.required])],
  		node_a: ['', Validators.compose([Validators.required])],
  		node_b: ['', Validators.compose([Validators.required])],
  		vendor: ['', Validators.compose([Validators.required])],
  		time_of_occ: ['', Validators.compose([Validators.required])],
  		cause_of_failure: ['', Validators.compose([Validators.required])],
  		impact: ['', Validators.compose([Validators.required])]
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransmissionTicketPage');
  }

  addTansmissionTicket(){
  	this.submitAttempt = true;

  	if(!this.transmissionTicketForm.valid){
  		return;
  	}
  	console.log('Success!!');
  	console.log(this.transmissionTicketForm.value);
  	console.log('add new transmission ticket');
  }

}
