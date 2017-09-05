import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


/**
 * Generated class for the ChgePwdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chge-pwd',
  templateUrl: 'chge-pwd.html',
})
export class ChgePwdPage {

  submitAttempt: boolean = false;
  changePwdForm: FormGroup;

	changePwdData = {
		"old_pwd": "",
		"new_pwd": "",
		"confirm_pwd": ""
	}

  constructor(public navCtrl: NavController, public navParams: NavParams,
   formBuilder: FormBuilder) {
    this.changePwdForm = formBuilder.group({
      old_pwd: ['', Validators.compose([Validators.required])],
      new_pwd: ['', Validators.compose([Validators.required])],
      confirm_pwd: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChgePwdPage');
  }

  changePassword(){

    this.submitAttempt = true;

    if(!this.changePwdForm.valid){
      return;
    }
    console.log('Success!!');
    console.log(this.changePwdForm.value);
  	console.log(this.changePwdData);
  }

}
