import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  registerForm: FormGroup;
  submitAttempt: boolean = false;

  registerData = {
    "fullname":"",
    "email":"",
    "phone_no": "",
    "region":"",
    "role": "",
    "password":""
  }
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

    this.registerForm = formBuilder.group({
      fullname: ['', Validators.compose([Validators.required])] ,
      email: ['', Validators.compose([Validators.required])],
      phone_no: ['', Validators.compose([Validators.required])],
      region: ['', Validators.compose([Validators.required])],
      role: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]     
    });
    
  }

  register(){
    this.submitAttempt = true;

    if(!this.registerForm.valid){
      return;
    }

    console.log("Success!!");
    console.log(this.registerForm.value);
    //console.log(this.registerData);
  }//end of register()
}
