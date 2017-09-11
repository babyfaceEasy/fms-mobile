import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


let apiUrl = "http://localhost:8080/fms_backup_new/public/api/";
let apiSec = "http://localhost:8080/fms_backup_new/public/api/user/signin";
//let apiSec = "http://localhost:8080/lara54/public/api/user/signin";
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(private http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  postData(credentials, type){
  	return new Promise((resolve, reject) => {
  		let headers = new Headers({'Content-Type' : 'application/json'});
      
      credentials = credentials;
      //console.log(credentials);
  		this.http.post(apiUrl + type, credentials, headers).subscribe(res => {
  			resolve(res.json());
  		}, (err) => {
  			reject(err);
  		});
      //this.http.post(apiSec, {moo:"foo",goo:"loo"}).subscribe(res => console.log(res.json()));
  	});
  }//end of postData

  getData(endPoint){
    return new Promise((resolve, reject) => {
      this.http.get(apiUrl+endPoint).subscribe(res => {
        resolve(res.json());
      }, (err) => {
        reject(err);
      });//end of get()
    });//end of new Promise
  }//end of getData

}
