import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

/**
 * Generated class for the IpntwkTicketPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ipntwk-ticket',
  templateUrl: 'ipntwk-ticket.html',
})
export class IpntwkTicketPage {

  ipTicketForm: FormGroup;
  submitAttempt: boolean = false;

	ipTicketData = {
		"title": "",
		"region": "",
		"priority":"",
		"location":"",
		"time_of_occ": "",
		"cause_of_failure": "",
		"impact": ""
	};

  constructor(public navCtrl: NavController,
   public navParams: NavParams, 
   public formBuilder: FormBuilder) {

    this.ipTicketForm = formBuilder.group({
      title: ['', Validators.compose([Validators.required])],
      region: ['', Validators.compose([Validators.required])],
      priority: ['', Validators.compose([Validators.required])],
      location: ['', Validators.compose([Validators.required])],
      time_of_occ: ['', Validators.compose([Validators.required])],
      cause_of_failure: ['', Validators.compose([Validators.required])],
      impact: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IpntwkTicketPage');
  }

  addIpNtwkTicket(){
    this.submitAttempt = true;

    if(!this.ipTicketForm.valid){
      return;
    }
    console.log('Success!!');
    console.log(this.ipTicketForm.value);
  	console.log('olakunle');
  }

}
