import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  submitAttempt: boolean = false;
  reponseData:any;
  loginData = {"email": "", "password": ""};	
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public authService: AuthServiceProvider, 
    private alertCtrl: AlertController,
    public formBuilder: FormBuilder) {

    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  handleErrors(err){
  	/*let alert = this.alertCtrl.create({
  		title: 'Error',
  		subTitle: '',
  	});*/
  }

  login_act(){

    this.submitAttempt = true;
    if(!this.loginForm.valid){
      return;
    }
    console.log("success!");
    console.log(this.loginForm.value);
    this.navCtrl.setRoot(HomePage);

  	//this is to validate if the boxes are empty



  	//this.navCtrl.push(HomePage);
    //this.navCtrl.setRoot(HomePage);
  	//Api connections
  	/*this.authService.postData(this.loginData, "user/signin").then((result) => {
  		this.reponseData = result;
  		console.log(this.reponseData);
  		localStorage.setItem('token', JSON.stringify(this.reponseData));
  		this.navCtrl.push(HomePage);
  	}, (err) => {
  		console.log(err);
  	});//end of authService*/
  }

}
