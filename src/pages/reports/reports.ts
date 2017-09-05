import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

/**
 * Generated class for the ReportsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html',
})
export class ReportsPage {

  submitAttempt: boolean = false;
  reportsForm: FormGroup;

	reportsData = {
		"start_date":"",
		"end_date":"",
		"trans_status": "",
		"bss_status": "",
		"ip_status": "",
		"all_status": ""
	};

  constructor(public navCtrl: NavController, public navParams: NavParams,
   formBuilder: FormBuilder) {
    this.reportsForm = formBuilder.group({
      start_date: ['', Validators.compose([Validators.required])],
      end_date: ['', Validators.compose([Validators.required])],
      trans_status: [''],
      bss_status: [''],
      ip_status: [''],
      all_status: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportsPage');
  }

  generateReport(){
    this.submitAttempt = true;

    if(!this.reportsForm.valid){
      return;
    }
    console.log('Success!!');
    console.log(this.reportsForm.value);
  	console.log(this.reportsData);
  }

}
